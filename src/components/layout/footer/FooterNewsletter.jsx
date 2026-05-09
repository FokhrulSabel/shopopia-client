const FooterNewsletter = () => {
  return (
    <div
      className="
        rounded-[28px]
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      <h3
        className="
          text-xl font-bold
          text-white
        "
      >
        Stay Updated
      </h3>

      <p
        className="
          mt-3
          text-sm leading-6
          text-zinc-400
        "
      >
        Get exclusive offers, product updates, and premium insights.
      </p>

      <form
        className="
          mt-6
          flex flex-col gap-3
          sm:flex-row
        "
      >
        <input
          type="email"
          placeholder="Email address"
          className="
            h-12
            flex-1
            rounded-xl
            border border-white/10
            bg-black/30
            px-4
            text-sm
            text-white
            outline-none
            transition-all duration-300
            placeholder:text-zinc-500
            focus:border-white/20
            focus:ring-2
            focus:ring-white/10
          "
        />

        <button
          type="submit"
          className="
            h-12
            rounded-xl
            bg-white
            px-6
            text-sm font-semibold
            text-black
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-zinc-200
          "
        >
          Join
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
