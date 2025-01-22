type FormType = "text" | "checkbox" | "radio" | "select";

type Form = {
  label: string;
  type: FormType;
  options?: string[];
  required?: boolean;
};

interface FormBase {
  getForm(): Form[];
}

class LoginForm implements FormBase {
  private form: Form[];

  LoginForm() {
    this.form = [
      {
        label: "Email",
        type: "text",
        required: true,
      },
      {
        label: "Password",
        type: "text",
        required: true,
      },
    ];
  }

  getForm(): Form[] {
    console.log("Generating login form");

    return this.form;
  }
}

class RegisterForm implements FormBase {
  private form: Form[];

  RegisterForm() {
    this.form = [
      {
        label: "Name",
        type: "text",
        required: true,
      },
      {
        label: "Email",
        type: "text",
        required: true,
      },
      {
        label: "Phone",
        type: "text",
        required: true,
      },
      {
        label: "Current Role",
        type: "select",
        options: ["Software Engineer", "Product Manager", "Data Scientist"],
        required: true,
      },
      {
        label: "Password",
        type: "text",
        required: true,
      },
    ];
  }

  getForm(): Form[] {
    console.log("Generating register form");

    return this.form;
  }
}

export class FormFactory {
  static createForm(type: "login" | "register"): FormBase {
    switch (type) {
      case "login":
        return new LoginForm();
      case "register":
        return new RegisterForm();
      default:
        throw new Error("Unknown form type");
    }
  }
}

const loginForm = FormFactory.createForm("login");
console.log(loginForm.getForm()); // return form with {email, password}

const registerForm = FormFactory.createForm("register");
console.log(registerForm.getForm()); // return form with {name, email, phone, currentRole, password}
