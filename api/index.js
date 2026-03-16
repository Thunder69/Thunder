export default async function handler(req, res) {
  try {
    const { num } = req.query;

    if (!num) {
      return res.status(400).send("num parameter required");
    }

    const apiUrl = `https://errorapi.gt.tc/numtoupi.php?num=${encodeURIComponent(num)}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*"
      }
    });

    let data = await response.text();

    // Hide all @username
    data = data.replace(/@\w+/g, "");

    // Hide all https links
    data = data.replace(/https?:\/\/\S+/g, "");

    // Always add your credit
    data += "\ncredit @OsxSpace";

    res.status(200).send(data);

  } catch (err) {
    res.status(500).send("Error: " + err.toString());
  }
}
