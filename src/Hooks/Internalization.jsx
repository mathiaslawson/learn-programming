import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function Translate({ key }) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t(key)}{" "}
      {/* Replace 'key' with the key of the text you want to translate */}
    </div>
  );
}

Translate.propTypes = {
  translationKey: PropTypes.string.isRequired,
};

export default Translate;
