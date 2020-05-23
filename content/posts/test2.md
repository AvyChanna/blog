+++
title = "Test2"
date = "2020-05-22T20:29:38+05:30"
description = "evsavas"
summary = "qacwfsqcfq"
cover = ""
coveralt = ""
tags = ["python"]
keywords = []
draft = false
katex = false
mermaid=true
+++

Sample AES code

{{<prismjs lang="python">}}
# Pycryptodome
from functools import reduce
from getpass import getpass

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
decode = input("Encode/Decode? [E/d]").lower().startswith('d')
key = getpass("KEY=").encode("latin-1")
key = pad(key, 32)
if len(key) > 32:
    key_lst = []
    for i in range(0, len(key), 32):
        key_lst.append(key[i:i + 32])
    key_new = map(lambda x: int(x.hex(), 16), key_lst)
    key = reduce(lambda x, y: x ^ y, key_new).to_bytes(32, 'big')

assert len(key) == 32
if decode:
    buffer = bytes.fromhex(input("CIPHERTEXT="))
    cipher = AES.new(key, AES.MODE_EAX, b'0123456789abcdef')
    print(f"Plaintext = {cipher.decrypt(buffer).decode('latin-1')}")
else:
    buffer = input("PLAINTEXT=").encode("latin-1")
    buffer = pad(buffer, 32)
    cipher = AES.new(key, AES.MODE_EAX, b'0123456789abcdef')
    print(f"ciphertext = {cipher.encrypt(buffer).hex()} , Keep it safe")
{{</prismjs>}}
