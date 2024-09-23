export default function hash(data) {
    return CryptoJS.SHA256(data).toString();
  }
  