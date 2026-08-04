export const mmvPhoneNumber = "5531991489855";

export const mmvWhatsAppMessage =
  "Olá! Vi o site da MMV e busco uma operação de transporte que resolva meus gargalos do dia a dia com mais agilidade. Podemos conversar?";

export const buildWhatsAppUrl = (
  phone = mmvPhoneNumber,
  message = mmvWhatsAppMessage
) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
