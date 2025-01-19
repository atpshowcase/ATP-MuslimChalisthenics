import { logo } from "../../assets/muscal";

export default function Stats() {
  return (
    <section className="stats_box py-10 flex items-center justify-center sm:w-9/12 w-11/12 mx-auto -mt-4 px-4">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          className="h-16 md:h-40 w-auto"
          src={logo}
          alt="Workflow"
        />
        {/* Text */}
        <h1
          className="md:text-[40px] text-[25px] font-bold"
          style={{ color: "#F1CE06" }}
        >
          We Are Nothing Without Allah
        </h1>
      </div>
    </section>
  );
}
