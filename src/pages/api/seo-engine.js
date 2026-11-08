export default function handler(req, res) {
  res.status(200).json({
    status: "Success",
    engine: "Royal Search Engine 24/7 Active & Connected",
    backend: "Next.js API Routes",
    contacts: {
      ceo: "Amirsam Yaghobi (09366681963)",
      betisaManager: "Bita Ghanaati (09125154024)"
    },
    copyright: "استارتاپ فناورانه هوش مصنوعی رویال فام - تمامی حقوق محفوظ است."
  });
}
