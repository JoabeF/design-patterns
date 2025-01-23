interface ThemeAbstractFactory {
  createHeader(): Header;
  createButton(): Button;
  createFooter(): Footer;
}

interface Header {
  height: number;
  title: string;
  backgroundColor: string;
}
interface Button {
  label: string;
  onClick: () => void;
  backgroundColor: string;
}
interface Footer {
  height: number;
  backgroundColor: string;
  version: string;
}

class LightHeader implements Header {
  height: number;
  title: string;
  backgroundColor: string;

  constructor() {
    this.height = 100;
    this.title = "Light Header";
    this.backgroundColor = "white";
  }
}
class LightButton implements Button {
  label: string;
  onClick: () => void;
  backgroundColor: string;

  constructor() {
    this.label = "Light Button";
    this.onClick = () => {};
    this.backgroundColor = "white";
  }
}
class LightFooter implements Footer {
  height: number;
  version: string;
  backgroundColor: string;

  constructor() {
    this.height = 50;
    this.version = "1.0.0";
    this.backgroundColor = "white";
  }
}

class DarkHeader implements Header {
  height: number;
  title: string;
  backgroundColor: string;

  constructor() {
    this.height = 100;
    this.title = "Dark Header";
    this.backgroundColor = "black";
  }
}
class DarkButton implements Button {
  label: string;
  onClick: () => void;
  backgroundColor: string;

  constructor() {
    this.label = "Dark Button";
    this.onClick = () => {};
    this.backgroundColor = "black";
  }
}
class DarkFooter implements Footer {
  height: number;
  version: string;
  backgroundColor: string;

  constructor() {
    this.height = 50;
    this.version = "1.0.0";
    this.backgroundColor = "black";
  }
}

class LightFactory implements ThemeAbstractFactory {
  createHeader(): Header {
    return new LightHeader();
  }
  createButton(): Button {
    return new LightButton();
  }
  createFooter(): Footer {
    return new LightFooter();
  }
}

class DarkFactory implements ThemeAbstractFactory {
  createHeader(): Header {
    return new DarkHeader();
  }
  createButton(): Button {
    return new DarkButton();
  }
  createFooter(): Footer {
    return new DarkFooter();
  }
}

class ThemeFactory {
  static createFactory(theme: "light" | "dark"): ThemeAbstractFactory {
    switch (theme) {
      case "light":
        return new LightFactory();
      case "dark":
        return new DarkFactory();
      default:
        return new LightFactory();
    }
  }
}

const isLight = false;
const factory = ThemeFactory.createFactory(isLight ? "light" : "dark");

const header = factory.createHeader();
const button = factory.createButton();
const footer = factory.createFooter();

console.log(header);
console.log(button);
console.log(footer);
