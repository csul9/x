import http.server
import ssl

server_address = ('', 443)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='server.pem', server_side=True)

print("Serving HTTPS on port 443...")
httpd.serve_forever()
