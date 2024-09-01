import Content from "@/components/layout/footer-content";

function Footer() {
  return (
    <div
      className="relative h-[80dvh] sm:h-screen md:h-[350px] lg:h-[450px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[80dvh] w-full bg-background sm:h-screen md:h-[350px] lg:h-[450px]">
        <Content />
      </div>
    </div>
  );
}

export default Footer;
