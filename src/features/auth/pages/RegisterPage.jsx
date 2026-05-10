import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100vh-80px)]
        items-center
        justify-center
        overflow-hidden
        px-4
        py-10
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.18),transparent_30%)]
        "
      />

      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
