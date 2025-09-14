import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Aboutme.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const mainTextToType = "Hello, I am Nattpahat Kingjak";
  const subTextToType = "I am a front end developer";
  const descriptionTextToType =
    "I am studying web development. Feel free to enjoy my website.";

  const typingSpeed = 50;
  const descriptionSpeed = 25;

  useEffect(() => {
    let mainIndex = 0;
    const mainInterval = setInterval(() => {
      setMainText((prev) => {
        if (mainIndex < mainTextToType.length) {
          const nextText = prev + mainTextToType[mainIndex];
          mainIndex++;
          return nextText;
        } else {
          clearInterval(mainInterval);
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(mainInterval);
  }, []);

  useEffect(() => {
    let subIndex = 0;
    const subInterval = setInterval(() => {
      setSubText((prev) => {
        if (subIndex < subTextToType.length) {
          const nextText = prev + subTextToType[subIndex];
          subIndex++;
          return nextText;
        } else {
          clearInterval(subInterval);
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(subInterval);
  }, []);

  useEffect(() => {
    let descIndex = 0;
    const descInterval = setInterval(() => {
      setDescriptionText((prev) => {
        if (descIndex < descriptionTextToType.length) {
          const nextText = prev + descriptionTextToType[descIndex];
          descIndex++;
          return nextText;
        } else {
          clearInterval(descInterval);
          return prev;
        }
      });
    }, descriptionSpeed);

    return () => clearInterval(descInterval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.from(".section", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50, 
      duration: 1,
    });
  
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".timeline-item",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -50, 
      duration: 1,
    });
  
    gsap.from(".achievement-card", {
      scrollTrigger: {
        trigger: ".achievement-card",
        start: "top 80%",
        end: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50, 
      duration: 1,
      stagger: 0.2, 
    });
  }, []);
  return (
    <div>
      <div className="landing-container">
        <div className="text-section">
          <h1 className="main-heading">{mainText}</h1>
          <h2 className="sub-heading">{subText}</h2>
          <p className="description">{descriptionText}</p>
        </div>

        <div className={`image-container ${imageLoaded ? "loaded" : ""}`}>
          <img
            src="https://img5.pic.in.th/file/secure-sv1/Por4.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="about-section section">
        <h1 className="About">เกี่ยวกับฉัน</h1>
        <div className="video-section">
          <video autoPlay muted loop className="background-video">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <img
              src="https://img2.pic.in.th/pic/unnamed-removebg-preview6fd621ee3617c531.png"
              alt="Profile"
              className="video-profile-img"
            />
            <div className="video-text-box">
              <p>
                สวัสดีครับ ผมชื่อ ณัฐภัทร กิ่งจักร์ มีชื่อเล่นว่า บอส ผมเกิดและโตขึ้นในจังหวัดลำปาง
                ผมเริ่มต้นการศึกษาในระดับอนุบาลจนถึงมัธยมต้นที่ โรงเรียนเทศบาล 7 หลังจากนั้นได้ศึกษาต่อในระดับประกาศนียบัตรวิชาชีพ (ปวช.) ที่ วิทยาลัยเทคนิคลำปาง และปัจจุบันกำลังศึกษาต่อในระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                ผมมีความสนใจเป็นพิเศษในด้าน Programming และการเขียน Code ในหลากหลายรูปแบบ งานอดิเรกของผมคือการ ฟังเพลง, อ่านนวนิยาย, รวมถึงการศึกษาการเขียน Coding เพื่อพัฒนาทักษะใหม่ ๆ อยู่เสมอ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section section">
        <h1 className="education-title">ประวัติการศึกษา</h1>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="circle"></div>
            <div className="content">
              <h2>โรงเรียนเทศบาล 7</h2>
              <p>สำเร็จการศึกษาระดับมัธยมต้น ในปี พ.ศ. 2563</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="circle1"></div>
            <div className="content">
              <h2>วิทยาลัยเทคนิคลำปาง</h2>
              <p>สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพ (ปวช.) ในปี พ.ศ. 2566</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="circle"></div>
            <div className="content">
              <h2>วิทยาลัยเทคนิคลำปาง</h2>
              <p>ปัจจุบันศึกษาระดับประกาศนียบัตรวิชาชั้นสูง (ปวส.) ในปี พ.ศ. 2567</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="achievement-section">
  <h1 className="achievement-title">กิจกรรม</h1>
  <div className="achievement-container">
    <div className="achievement-card">
      <img
        src="https://img5.pic.in.th/file/secure-sv1/74268.jpg"
        alt="กิจกรรม 1"
        className="achievement-img"
      />
      <h2>สำเร็จหลักสูตรเตรียมสอบวัดระดับภาษาอังกฤษ (CEFR Standard)
      </h2>
      <p>
      ภาพการเข้าร่วมโครงการ "CEFR English Tests Preparation Project" จัดโดยศูนย์ภาษา มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เพื่อเตรียมความพร้อมและยกระดับทักษะภาษาอังกฤษสู่มาตรฐานสากล
      </p>
    </div>
    <div className="achievement-card">
      <img
        src="https://img2.pic.in.th/pic/74269.jpg"
        alt="กิจกรรม 2"
        className="achievement-img"
      />
      <h2>ผ่านการประเมินและสำเร็จหลักสูตรเตรียมสอบวัดระดับภาษาอังกฤษ (CEFR Standard)
      </h2>
      <p>
      ภาพขณะเข้ารับการทดสอบเพื่อประเมินความสามารถทางภาษาอังกฤษ  ซึ่งเป็นส่วนหนึ่งในโครงการเตรียมความพร้อมสู่มาตรฐาน CEFR      </p>
    </div>
    <div className="achievement-card">
      <img
        src="https://img5.pic.in.th/file/secure-sv1/74270.jpg"
        alt="Achievement 3"
        className="achievement-img"
      />
      <h2>การเข้าร่วมกิจกรรมวิ่ง "86 ปี LPTC แฟมิลี่รัน"</h2>
      <p>
      เข้าร่วมกิจกรรมวิ่งในรายการ "86 ปี LPTC แฟมิลี่รัน" ที่จัดขึ้นโดยวิทยาลัยเทคนิคลำปาง เพื่อส่งเสริมสุขภาพและสร้างความสมดุลระหว่างการเรียนและกิจกรรมนอกหลักสูตร สะท้อนให้เห็นถึงความมีวินัยและความมุ่งมั่นในการดูแลตนเองให้แข็งแรงอยู่เสมอ      </p>
    </div>
  </div>
 </div>
 </div>
  );
};

export default Aboutme;
