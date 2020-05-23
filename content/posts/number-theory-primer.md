+++
title = "Number Theory Primer"
date = "2020-05-23T14:49:49+05:30"
description = "A (short) primer on basics of Number theory"
cover = ""
coveralt = ""
tags = ["maths", "number theory"]
draft = true
katexkatex = true
+++

First serious post, yay.

I'll be going over some of the most commonly used in numreical computations and cryptography.
The ultimate goal is to make sure even the beginners could understand it.

# Greatest Common Divisor

This is one of the oldest tricks in the book. GCD(also called HCF) finds common divisors of 2 numbers.

$ Theorem - gcd(a,b) = gcd(a%b, b) $

{{<prismjs lang="python">}}
def gcd(a, b):
    ret = 1
    for i in range(2, min(a,b)+1):
	if a%i == 0 and b
{{</prismjs>}}
