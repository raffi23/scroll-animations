import { motion } from "framer-motion";
import Icon from "./Icon";
import Portal from "./Portal";
import Spacer from "./Spacer";

const NavCard = () => {
  return (
    <div className="relative mt-auto mb-10">
      <motion.div
        style={{
          maskImage: "url(/amie-992/masks/nav-hidden.svg)",
          maskRepeat: "no-repeat",
          maskSize: "100%",
        }}
        className="rounded-2xl flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm"
      >
        <Icon src="/amie-992/icons/search.svg" />
        <Spacer />
        <Portal />
        <Icon src="/amie-992/icons/add.svg" />
        <Spacer />
        <Icon src="/amie-992/icons/sidebar.svg" />
        <Icon src="/amie-992/icons/gear.svg" />
      </motion.div>

      <Portal absolute />
    </div>
  );
};

export default NavCard;
