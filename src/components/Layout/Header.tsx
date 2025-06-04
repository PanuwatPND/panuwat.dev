import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-between px-2">
      <div className="font-extrabold text-2xl tracking-wide text-black">
        PANUWAT
      </div>

      <LanguageSwitcher />
    </div>
  );
};

export default Header;
