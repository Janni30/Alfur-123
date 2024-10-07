import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll text-center">
      <li>
        <a href="/">
          Home
          <span>
            <i className="fas" />
          </span>
        </a>
      </li>
      <li>
        <a href="/about">
          About Us
          <span>
            <i className="fas" />
          </span>
        </a>
      </li>

      <li>
        <a href="#">
          Courses
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menus courses-menu-horizontal " style={{backgroundColor:'#223857'}}>
          <div className="row" >
            <li className="col">
              <Link legacyBehavior href="/tajweed">
                <a className="">
                  <img src="assets/img/course11.png" alt="Tajweed" width={250} height={200} className="p-20 align-middle justify-center ml-40"/>
                  <p className="mt-20 text-center">Tajweed Masterclass</p>
                </a>
              </Link>
            </li>
            <li className="col">
              <Link legacyBehavior href="/quran">
                <a>
                  <img src="assets/img/course22.png" alt="" width={250} height={200} className="p-20 align-middle justify-center ml-40"/>
                  <p className="mt-20 text-center">Qur'an Memorization</p>
                </a>
              </Link>
            </li>
            <li className="col">
              <Link legacyBehavior href="/arabic">
                <a>
                  <img src="assets/img/course33.png" alt="" width={250} height={200} className="p-20 align-middle justify-center ml-40"/>
                  <p className="mt-20 text-center">Learn Arabic Language </p>
                </a>
              </Link>
            </li>
           
          </div>
        </ul>
      </li>


      <li>
        <Link legacyBehavior href="/pricing">
          Pricing
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
