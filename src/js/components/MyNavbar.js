import React from "react";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import Language from "../langDropDownComponent/Language";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { i18n } from "../../localization/i18n"; //it's used for localization

function MyNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { t } = useTranslation();
  return (
    <header className="header">
      <nav className="navbar container">
        <Link className="nav-link" to="/">
          AKFA
        </Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" className="nav-item__link">
              {t("menu_home")}
            </Link>
          </li>
          <li className="nav-item">
            <div>
              <Link to="#" className="nav-item__link">
                {t("menu_report")}
              </Link>
            </div>
            <div className="dropdown-content">
              <Link
                className="dropdown-content__item"
                to="/report/client-balance"
              >
                {t("menu_report_client")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/invoice-item"
              >
                {t("menu_report_invoice_item")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/remainder"
              >
                {t("menu_report_remainder")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/sales-by-product"
              >
                {t("menu_report_sales_by_product")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/invoice"
              >
                {t("menu_invoice")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/payment"
              >
                {t("menu_payment")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/private-and-public-sector"
              >
                {t("menu_private_and_public_sector")}
              </Link>
              <Link
                className="dropdown-content__item"
                to="/report/debt-report-client"
              >
                {t("menu_report_debt_client")}
              </Link>
            </div>
          </li>
          {user.role === "ADMINISTRATOR" ? (
            <li className="nav-item">
              <Link to="/user" className="nav-item__link">
                {t("menu_user")}
              </Link>
            </li>
          ) : (
            <></>
          )}
          <li className="nav-item">
            <Link to="/dealer" className="nav-item__link">
              {t("menu_dealer")}
            </Link>
          </li>
        </ul>

        <Language en={t("local_en")} ru={t("local_ru")} uz={t("local_uz")} />
        <button
          className="nav__btn"
          onClick={() => {
            dispatch(logout());
            navigate("/");
            window.sessionStorage.removeItem("user");
            window.sessionStorage.removeItem("token");
            window.location.reload();
          }}
        >
          {t("menu_log_out")}
        </button>
      </nav>
    </header>
  );
}

export default MyNavbar;
