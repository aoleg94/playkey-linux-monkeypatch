#!/usr/bin/env python
import BaseHTTPServer as bhs
import os

CMD='wine "C:/Program Files/Playkey/playkey.exe" "%s" '
PORT=13131

class MyRQ(bhs.BaseHTTPRequestHandler):
	def do_GET(self):
		url=self.path[1:]
		if url.startswith('playkey://'):
			#print CMD%url
			os.system(CMD%url)
			self.send_response(200)
			self.send_header('Content-Type', 'text/plain')
			self.send_header('Access-Control-Allow-Origin', 'http://playkey.net')
		else: self.send_response(404)

if __name__=='__main__':
	server=bhs.HTTPServer(('localhost', 13131), MyRQ)
	server.serve_forever()
