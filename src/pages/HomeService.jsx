import SliderImage from "../components/SliderImage";

function HomeService() {
  return (
    <>
      <div className="prompt Home-service flex flex-col justify-center items-center h-[100%] lg:border-black lg:border-[3px] lg:m-10 lg:rounded-3xl m-10">
        <h1 className="prompt-Bold text-3xl pt-6">HomeService</h1>
        <div className="notice-container mt-4 text-red-600">
          <p className=" ">
            *** โปรเจคนี้คือ final project ของการเรียน full stack development
            bootcamp จาก TechUp
          </p>
          <p>
            {" "}
            เน้นการทำงานแบบเสมือนจริง และในการทำงานร่วมกันกับทีม ใช้การทำงานแบบ
            Agile and Scrum
          </p>
        </div>
        <h1 className=" lg:font-bold lg:text-2xl lg:w-[650px] md:font-bold md:text-xl mt-4">
          {" "}
          Home Services คือ Application ที่เอาไว้เรียกช่างมาบริการซ่อมบ้าน
          ซึ่งการซ่อมบ้านก็จะมี Service (การบริการ) หลายๆ
          อย่างแตกต่างกันออกไปแบ่งตามหมวดหมู่ เช่น หมวดหมู่ห้องครัว,
          หมวดหมู่ทั่วไป, หมวดหมู่ห้องน้ำ เป็นต้น
        </h1>
        <div className="detail-container pt-4"></div>
        <div className="project-detail container my-4  w-[350px] md:w-[80%] lg:w-[90%] h-[50%]  rounded-2xl lg:flex lg:justify-evenly gap-6 lg:px-10 lg:py-4">
          <div className="image-detail w-[350px] md:w-[100%] lg:w-[120%] h-[50%]">
            <SliderImage />
          </div>
          <div className="text-detial lg:w-[70%] lg:text-left md:text-left lg:px-0 px-4 lg:py-16">
            <p>
              การทำงานของกลุ่ม ทุกคนจะได้ทำแบบ full stack
              โดยจะทำการแบ่งหน้าที่ทั้งฝั่ง Frontend และ Backend ให้ทุกคนได้ทำ
            </p>
            <p className=" text-[12px]  text-red-600">
              ในส่วนนี้มิ้นท์ขออธิบายเฉพาะในส่วนของหน้าที่ที่ตนเองได้รับนะคะ
            </p>
            <p className="pt-4">
              <span className=" font-bold ">Authentication and JWT </span>-
              สร้าง API สำหรับ Login และตรวจสอบ Token เพื่อยืนยันตัวตนว่า users
              เป็น customer หรือ admin เพื่อเข้าถึงการใช้งานให้ตรงตาม role นั้นๆ
              และตรวจสอบ users ว่าหากยังไม่มีการ login ให้ทำการ login หรือ
              register ก่อนการเข้าถึงรายละเอียดการใช้บริการทั้งหมด
            </p>
            <p className=" pt-4 font-semibold text-blue-800">
              ในส่วนของการใช้งาน Aplication จะมี 2 ส่วนคือ users ฝั่ง customer
              และ admin
            </p>
            <p className=" pt-4">
              <span className=" font-bold ">Admin Part </span>- สร้าง API CRUD
              สำหรับแอดมินเกี่ยวกับหมวดหมู่ของบริการ
            </p>{" "}
            <p className="">
              <span className=" font-bold ">Customer Part </span>- ทำหน้า Home
              Page (UI) เพื่อเลือกบริการ และ filter bar
              สำหรับเลือกบริการตามความต้องการของลูกค้า
            </p>{" "}
            <p className="">
              <span className=" font-bold ">Other </span>- ดูแลและแก้ไขในส่วนของ
              UI ฝั่งแอดมินทั้งหมดให้ตรงตาม requirements ที่ PO ต้องการ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeService;
