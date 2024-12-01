import { useEffect, useRef, useState } from "react";
import "./ModalWindow.css";

const ModalWindow = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = ''; 
    }
  
    return () => {
      document.body.style.overflow = ''; 
    }
  }, [isVisible])
  

  const toggleModal = () => {
    setIsVisible(!isVisible);
    const modal = modalRef.current;
    if (modal) {
      if (modal.classList.contains("visible")) {
        modal.classList.remove("visible");
        modal.classList.add("hidden");
      } else {
        modal.classList.remove("hidden");
        modal.classList.add("visible");
      }
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="contact-btn">
        Contact Us
      </button>

      <div ref={modalRef} className="modal hidden">
        <div className="modal-content">
          <span className="close-btn" onClick={toggleModal}>
            &times;
          </span>
          <h2>Contact Form</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit" className="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
