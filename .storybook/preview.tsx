import type { Preview, ReactRenderer } from "@storybook/react";
import { ConfigProvider } from "antd";
import "../lib/style.css";
import { useGlobals } from "@storybook/preview-api";
import React from "react";
import { DecoratorFunction } from "@storybook/types";
import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import { libTheme } from "../lib/theme";
import { IntlProvider } from "react-intl";

const withRTL: DecoratorFunction<ReactRenderer> = (Story) => {
  const [globals] = useGlobals();
  const { locale } = globals;

  return (
    <div className="h-full" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Story />
    </div>
  );
};

const withAntdConfg: DecoratorFunction<ReactRenderer> = (Story) => {
  const [globals] = useGlobals();
  const { locale } = globals;

  return (
    <ConfigProvider theme={libTheme} locale={locale === "ar" ? arEG : enUS}>
      <Story />
    </ConfigProvider>
  );
};

const withIntl: DecoratorFunction<ReactRenderer> = (Story) => {
  const [globals] = useGlobals();
  const { locale } = globals;

  return (
    <IntlProvider locale={locale}>
      <Story />
    </IntlProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "ar",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "ar", right: "🇸🇦", title: "Arabic" },
        ],
      },
    },
  },
  decorators: [withRTL, withAntdConfg, withIntl],
};

export default preview;
