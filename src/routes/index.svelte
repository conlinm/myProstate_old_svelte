<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to myProstate</h1>
        <p class="py-6">A home for storage and review of your prostate related health data</p>
        
        <div class="m-4 flex flex-col 
        items-center justify-center">
          <form class="login space-y-2">
            <input type="text" placeholder="myProstate Username" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
            <button type="submit" formaction="/create" class="btn btn-accent w-full max-w-xs">Log In</button>
          </form>
        </div>
        <div class="m-4">
          <form >
            <button type="submit" formaction="/create" class="btn btn-primary w-full max-w-xs">Create Account</button>
          </form>
        </div>
        <div class="m-4 flex flex-col 
        items-center justify-center space-y-2">
          <a href="/login">Reset Password</a>
          <a href="/login">Trouble logging in?</a>
        </div>
      
      </div>
    </div>
  </div>