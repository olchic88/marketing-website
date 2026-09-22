/* CookieConsentReact связывает логику из useCookieConsent 
с UI-компонентами CookieBanner и CookieModal.
*/

import CookieBanner from "./CookieBanner";
import CookieModal from "./CookieModal";
import { useCookieConsent } from "./useCookieConsent";

export default function CookieConsent() {
  const {
    isBannerOpen,
    isModalOpen,
    acceptAll,
    declineAll,
    manageCookies,
    savePreferences,
  } = useCookieConsent();

  return (
    <>
      {isBannerOpen && (
        <CookieBanner
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onManageCookies={manageCookies}
        />
      )}

      {isModalOpen && (
        <CookieModal
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onSavePreferences={savePreferences}
        />
      )}
    </>
  );
}
