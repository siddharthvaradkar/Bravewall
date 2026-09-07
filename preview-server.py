from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).parent / "dist" / "client"


class StaticExportHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        request_path = urlsplit(path).path.lstrip("/")
        candidate = ROOT / request_path

        if candidate.is_file():
            return str(candidate)

        if not Path(request_path).suffix:
            html_candidate = ROOT / f"{request_path}.html"
            if html_candidate.is_file():
                return str(html_candidate)

        if candidate.is_dir():
            index_candidate = candidate / "index.html"
            if index_candidate.is_file():
                return str(index_candidate)

        return str(ROOT / "404.html")


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8787), StaticExportHandler).serve_forever()
