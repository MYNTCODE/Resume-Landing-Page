import { useEffect, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = ({ isActive }) => {
  const [pos, setPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [mouse, setMouse] = useState({ x: pos.x, y: pos.y });
  const speed = 0.08;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const xSet = gsap.quickSetter(".ball", "x", "px");
    const ySet = gsap.quickSetter(".ball", "y", "px");

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      setPos({
        x: pos.x + (mouse.x - pos.x) * dt,
        y: pos.y + (mouse.y - pos.y) * dt,
      });
      xSet(pos.x);
      ySet(pos.y);
    });
  }, [mouse, pos, isActive]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // ตรวจสอบประเภทของอุปกรณ์
      setIsDesktop(window.innerWidth > 768); // ให้ถือว่าเป็น desktop ถ้าความกว้างของหน้าจอมีขนาดมากกว่า 768 pixels
    };

    // เพิ่ม event listener สำหรับตรวจสอบขนาดหน้าจอเมื่อหน้าจอถูก resize
    window.addEventListener("resize", handleResize);

    // เรียกฟังก์ชั่น handleResize เพื่อตรวจสอบประเภทของอุปกรณ์ทันทีเมื่อ component โหลด
    handleResize();

    // คืนฟังก์ชั่นเพื่อลบ event listener เมื่อ component ถูก unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <div>
          {isActive && (
            <div
              className="ball"
              style={{
                position: "fixed",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default CustomCursor;
