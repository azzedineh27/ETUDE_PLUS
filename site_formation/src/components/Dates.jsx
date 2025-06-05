import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Dates.css";
import formationVideo from "/test.mp4";

const Dates = () => {
  const { t } = useTranslation();

  return (
    <section className="dates-section" id="dates">
      <h2 className="dates-title">{t("dates_title")}</h2>

      <div className="dates-content">
        <div className="dates-table-container">
          <h3 className="dates-subtitle">{t("dates_subtitle")}</h3>
          <table className="dates-table">
            <thead>
              <tr>
                <th>{t("dates_detail")}</th>
                <th>{t("dates_start")}</th>
                <th>{t("dates_end")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("dates_row_1")}</td>
                <td>1<sup>er</sup> avril</td>
                <td>40 mins</td>
              </tr>
              <tr>
                <td>{t("dates_row_2")}</td>
                <td>28 juin</td>
                <td>28 juin</td>
              </tr>
              <tr>
                <td>{t("dates_row_3")}</td>
                <td>5 septembre 2025</td>
                <td>5 septembre</td>
              </tr>
              <tr>
                <td>{t("dates_row_4")}</td>
                <td>13 décembre 2025</td>
                <td>13 décembre</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="video-container">
          <div className="video-wrapper">
            <video
              src={formationVideo}
              controls
              preload="metadata"
              width="100%"
              poster="" // tu peux aussi mettre une image de couverture ici
            >
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
          <p className="video-caption">{t("dates_video_caption")}</p>
        </div>
      </div>
    </section>
  );
};

export default Dates;
