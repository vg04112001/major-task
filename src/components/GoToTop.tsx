import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from './GoToTop.module.css'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const goToBtn = () : void=> {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () : void => {
    let heightToHidden = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className={`d-block d-sm-none`}>
      {isVisible && (
        <div className={ `${styles.topBtn}`} onClick={goToBtn}>
          <IoIosArrowUp size={35}/>
        </div>
      )}
    </div>
  );
};

export default GoToTop;