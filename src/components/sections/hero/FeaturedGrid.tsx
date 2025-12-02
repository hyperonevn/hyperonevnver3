import React, { useEffect, useState } from "react";

interface EventImage {
  key: string;
  url: string;
}

export const FeaturedGrid: React.FC = () => {
  const [allImages, setAllImages] = useState<EventImage[]>([]);
  const [nine, setNine] = useState<EventImage[]>([]);

  // ⛩ Lấy toàn bộ ảnh lúc mount
  useEffect(() => {
    const load = async () => {
      const res = await fetch(
        "https://hyperone-event-api.hyperonevn.workers.dev/public/hyperone/event/"
      );
      const json = await res.json();

      const list: EventImage[] = json.files.filter((f: any) =>
        f.url.endsWith(".jpg")
      );

      setAllImages(list);

      // chọn 9 ảnh ngẫu nhiên ban đầu
      setNine(random9(list));
    };

    load();
  }, []);

  // 🎲 Hàm random 9 ảnh không trùng
  const random9 = (list: EventImage[]) => {
    if (!list || list.length === 0) return [];
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 9);
  };

  // 🔄 Cứ 5 giây đổi 9 ảnh *nhưng không re-render grid*
  useEffect(() => {
    if (allImages.length < 9) return;

    const interval = setInterval(() => {
      const new9 = random9(allImages);

      // preload toàn bộ ảnh trước khi thay
      Promise.all(
        new9.map(
          (img) =>
            new Promise((res) => {
              const i = new Image();
              i.onload = res;
              i.src = img.url;
            })
        )
      ).then(() => setNine(new9));
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages]);

  return (
    <div
      className="
        grid grid-cols-3 grid-rows-3 gap-1
        w-full max-w-[360px] aspect-square mx-auto
      "
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="
            w-full h-full
            bg-gray-900 rounded-md overflow-hidden
            border border-gray-800
          "
        >
          {nine[i] && (
            <img
              src={nine[i].url}
              className="
                w-full h-full object-cover
                transition-opacity duration-500
              "
            />
          )}
        </div>
      ))}
    </div>
  );
};
