<template>
  <div>
    <div class="ele-middle">
      <svg height="48" viewBox="0 0 16 16" version="1.1" width="48" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </div>
    <div id="content">
      <main id="js-pjax-container">
        <div class="auth-form" id="login">
          <!-- '"` -->
          <!-- </textarea></xmp> -->
          <form action="/session" accept-charset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="✓" />
            <input
              type="hidden"
              name="authenticity_token"
              value="O2wFOjuHHX2VDv8b0MBytVZdoZO8jKXdDvhji1B6+jdR13UwF1+sOzjylHZwSa6UWk4n+/2yUH6ilNrCf43adg=="
            />
            <div class="auth-form-header">
              <h1>Sign in to App</h1>
            </div>

            <div class="auth-form-body mt-3">
              <label for="login_field">Username or email address</label>
              <input
                type="text"
                name="login"
                id="login_field"
                class="form-control input-block"
                tabindex="1"
                autocapitalize="off"
                autocorrect="off"
                autofocus="autofocus"
              />

              <label for="password">
                Password
                <a class="label-link" href="/password_reset">Forgot password?</a>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control input-block"
                tabindex="2"
              />
              <input type="hidden" name="webauthn-support" value="supported" />

              <input
                type="text"
                name="required_field_96b1"
                id="required_field_96b1"
                hidden="hidden"
                class="form-control"
              />
              <input type="hidden" name="timestamp" value="1566977156168" class="form-control" />
              <input
                type="hidden"
                name="timestamp_secret"
                value="13a73df6d7b7693744bb4b6c0b914fe7769200bffd345a7b846916485fbbf83f"
                class="form-control"
              />

              <input
                type="submit"
                name="commit"
                value="Sign in"
                tabindex="3"
                class="btn btn-primary btn-block"
                data-disable-with="Signing in…"
              />
            </div>
          </form>

          <p class="create-account-callout mt-3">
            New to GitHub?
            <a
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;sign in switch to sign up&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;726790585.1562902341&quot;,&quot;originating_request_id&quot;:&quot;36AB:3B95:2DE386:4075C3:5D662C81&quot;,&quot;originating_url&quot;:&quot;https://github.com/login&quot;,&quot;referrer&quot;:&quot;https://github.com/&quot;,&quot;user_id&quot;:null}}"
              data-hydro-click-hmac="4a24e2b62d5a9210bb239fbb62d31d4b625887134a425e034a66b198dce715dc"
              data-ga-click="Sign in, switch to sign up"
              href="/join?source=login"
            >Create an account</a>.
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { validUsername } from "&/utils/validate";
// import SocialSign from "./components/SocialSignin";
export default {
  name: "Login",
  data() {}
};
</script>
<style lang="scss">
body {
  font-family: system-ui;
  line-height: 1.5;
}

.ele-middle {
  text-align: center;
}
</style>

<style lang="scss" scoped>
.auth-form {
  margin: 0 auto;
  width: 340px;
}

.label-link {
  float: right;
  font-size: 12px;
}
.auth-form-header {
  background-color: transparent;
  border: 0;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.auth-form-header h1 {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.5px;
}

.auth-form-body {
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  font-size: 14px;
  padding: 20px;
}
.form-control {
  background-color: #fff;
  background-position: right 8px center;
  background-repeat: no-repeat;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  color: #24292e;
  font-size: 16px;
  line-height: 20px;
  min-height: 34px;
  outline: none;
  vertical-align: middle;
}

.auth-form-body .input-block {
  width: 100%;
  margin-bottom: 15px;
  margin-top: 5px;
}
.auth-form label {
  display: block;
  margin-bottom: 7px;
}
.btn-primary {
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  color: #fff;
}
.btn-block {
  display: block;
  text-align: center;
  width: 100%;
}
.btn {
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
.create-account-callout {
  border: 1px solid #d8dee2;
  border-radius: 5px;
  padding: 15px 20px;
  text-align: center;
}
.mt-3 {
  margin-top: 16px !important;
}
</style>



