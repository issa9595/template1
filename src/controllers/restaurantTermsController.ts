import { termsViewModel } from "../domain/restaurantTerms";
import type { PrivacyViewModel } from "../domain/restaurantPrivacy";

export function getTermsViewModel(): PrivacyViewModel {
  return termsViewModel;
}

