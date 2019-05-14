function foo(r) {
  r.log("hello from foo() handler")
  return "foo"
}

function summary(r) {
  var a, s, h

  s = "JS summary\n\n"

  s += "Method: " + r.method + "\n"
  s += "HTTP version: " + r.httpVersion + "\n"
  s += "Host: " + r.headersIn.host + "\n"
  s += "Remote Address: " + r.remoteAddress + "\n"
  s += "URI: " + r.uri + "\n"

  s += "Headers:\n"
  for (h in r.headersIn) {
    s += "  header '" + h + "' is '" + r.headersIn[h] + "'\n"
  }

  s += "Args:\n"
  for (a in r.args) {
      s += "  arg '" + a + "' is '" + r.args[a] + "'\n"
  }
  s += r.requestBody
  r.error('1111111111111111111')
  return s
}

function baz(r) {
  r.status = 200
  r.headersOut.foo = 1234
  r.headersOut['Content-Type'] = "text/plain charset=utf-8"
  r.headersOut['Content-Length'] = 16
  r.sendHeader()
  r.send("nginx ")
  r.send("javascript")
  r.finish()
}

function hello(r) {
  var s
  s = 'hello world '
  s += r.requestBody
  s += ' '
  s += typeof(r.requestBody)
  s += ' '
  // r.args不是真正的对象
  // s += typeof(r.args) 
  // s += JSON.stringify(r.args)
  // s += Object.values(r.args) 
  // s += Object.entries(r.args) 
  s += JSON.stringify({ m: 1, n: true })
  for (var a in r.args) {
      s += "  arg '" + a + "' is '" + r.args[a] + "'\n"
  }
  for (var i in r.variables) {
      s += "  var '" + i + "' is '" + r.variables[i] + "'\n"
  }
  r.error(r.args.c)
  r.return(200, s)
}
