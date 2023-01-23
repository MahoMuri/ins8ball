import { Icon } from "@iconify-icon/react";
import anime from "animejs";
import styles from "../styles/Popup.module.css";

type PopupProps = {
  isVisible: boolean | undefined;
  onClose: () => {} | void;
  bgColor?: string;
  innerContent?: string;
};

export default function Popup(props: PopupProps) {
  if (!props.isVisible) {
    return null;
  }
  return (
    <div className={styles.popupBG}>
      <div className="w-[1000px] bg-ins8ball-yellow rounded-lg">
        <Icon
          className="flex justify-end cursor-pointer pr-4 pt-4"
          icon="material-symbols:close-rounded"
          width={30}
          onClick={() => props.onClose()}
        ></Icon>
        <div className={styles.popupContent}>
          <p>
            This is fun and all but Fortune Telling is not real. The real thing
            is taking personality tests that are backed with trusted sources and
            studies.
          </p>
          <br />
          <p>Don&apos;t forget to follow both COMPILE and INSIGHT!</p>
        </div>
      </div>
    </div>
  );
}
