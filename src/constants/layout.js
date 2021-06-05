
class Layout {
  constructor() {
    this.landingPage = "/story";
    this.menuItems = [
      {
        "name": "Story",
        "type": "button",
        "icon": "ant-design:star-filled",
        "controller": "/story",
        "customTitle": "Story AR Game",
        "isFavourite": true,
        "subMenuItems": []
      },
      {
        "name": "Dashboard",
        "type": "button",
        "icon": "ant-design:dashboard-filled",
        "controller": "/dashboard",
        "customTitle": "Story AR Dashboard",
        "isFavourite": true,
        "subMenuItems": []
      },
      // {
      //   "name": "Example",
      //   "type": "button",
      //   "icon": "bytesize:code",
      //   "controller": "/examples",
      //   "customTitle": "Example Code File",
      //   "isFavourite": true,
      //   "subMenuItems": []
      // },
      {
        "name": "Logout",
        "type": "logout",
        "icon": "fe:logout",
        "controller": "",
        "customTitle": "Welcome to Boiler Plate",
        "isFavourite": false,
        "subMenuItems": []
      }
    ];
    this.header = {
      "visibleOnDesktop": true,
      "visibleOnMobile": true,
      "useCustomColor": false,
      "color": "primary",
      "customColorCode": ""
    };
    this.bottomMobileNavigation = true;
    this.displayMobileMenuHam = true;
    this.menuButtonLabel = "Menu";
    this.sideMenu = {
      "permanent": true,
      "default": "open"
    };

    this.defaultContainerSX = {
      backgroundColor: 'background.default',
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    };
  }
}

const instance = new Layout();
export default instance;