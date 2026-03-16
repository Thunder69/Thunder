export default async function handler(req, res) {
  try {
    const { num } = req.query;

    if (!num) {
      return res.status(400).send("num parameter required");
    }

    const url = `https://errorapi.gt.tc/numtoupi.php?num=${num}`;

    const response = await fetch(url);
    let data = await response.text();

    // Hide all @usernames
    data = data.replace(/@\w+/g, "");

    // Hide all https links
    data = data.replace(/https?:\/\/\S+/g, "");

    // Add your credit everywhere
    data = data + "\ncredit @OsxSpace";

    res.status(200).send(data);

  } catch (err) {
    res.status(500).send("Error: " + err.toString());
  }
}
