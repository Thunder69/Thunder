const axios = require("axios");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { username } = req.query;
  const top = "⚡ Powered by @OsxSpace | t.me/OsxSpace";
  const bottom = "© OsxSpace | t.me/OsxSpace";

  if (!username) return res.status(400).json({ credit: top, error: "Use ?username=example", footer: bottom });

  try {
    const { data } = await axios.get("https://saderror.ct.ws/Instagram.php", {
      params: { username }, timeout: 15000,
      headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://saderror.ct.ws/" }
    });
    res.json({ credit: top, ...data, footer: bottom });
  } catch (e) {
    res.status(500).json({ credit: top, error: e.message, footer: bottom });
  }
};
                
