import Icon from "./Icon";
import Portal from "./Portal";
import Spacer from "./Spacer";

const Nav = () => {
  return (
    <div className="overflow-hidden rounded-2xl mt-auto mb-10 flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm">
      <Icon src="/amie-992/icons/search.svg" />
      <Spacer />
      <Portal />
      <Icon src="/amie-992/icons/add.svg" />
      <Spacer />
      <Icon src="/amie-992/icons/sidebar.svg" />
      <Icon src="/amie-992/icons/gear.svg" />
    </div>
  );
};

export default Nav;
