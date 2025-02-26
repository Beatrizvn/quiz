const SignIn = async () => {
  
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

      <form
        className="space-y-4"
        
      >
        <input name="email" placeholder="Email" type="email" required autoComplete="email" />
        <input name="password" placeholder="Password" type="password" required autoComplete="current-password" />
        <button className="w-full" type="submit">
          Sign In
        </button>
      </form>

      <div className="text-center">
        <a href="/signup">
          <button type="button">Don&apos;t have an account? Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default SignIn;