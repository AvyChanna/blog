+++
title = "Number Theory Primer"
date = "2020-05-23T14:49:49+05:30"
description = "A (short) primer on basics of Number theory"
cover = ""
coveralt = ""
toc = true
tags = ["maths", "number theory"]
draft = false
katex = true
+++

A beginner friendly explaination of some select algorithms in number theory.
This is, by no means, a complete/detailed post.
For more information on these algorithms, consult a reliable source like [Wikipedia](https://www.wikipedia.org).

## Greatest Common Divisor

GCD (also called HCF) finds common divisors of 2 numbers. 

> **Shortcut** -> $ gcd(a,b) = gcd(a\\%b, b) $.

The following is an implementation of Euclidean Algorithm.

{{<prismjs lang="python">}}
def gcd(x, y):
	'''finds GCD of 2 positive integers'''
	while y:
		y, x =  x % y, y
	return x
# Or simply do ->
# from math import gcd
# result = gcd(25, 15)
{{</prismjs>}}

We use divison lemma $a = bq+r$.
In next iteration, put $a = b$ and $b = r$ and repeat till $r = 0$.

Let us define 2 sequences $\\{q_i\\}$, $\\{r_i\\}$,
such that $r_{i-2} = r_{i-1}q_{i}+r_i$,
where $\\{r_i\\}$ is the squence of remainders in integer division,
with $r_{0}=a$ and $r_{1}=b$ as our initial conditions.

We iterate this seqence $i$ times till we reach $r_{i-1} = 0$.
The term $r_{i-2}$ is the required GCD.

*Example* - $gcd(100, 26)$

{{<table class="1" width="80%,10%,10%">}}
| Expression($a=bq+r$)     | $ b$ | $ r$ |
| ------------------------ | ---- | ---- |
| $100 = 3 \times 26 + 22$ | $26$ | $22$ |
| $ 26 = 1 \times 22 +  4$ | $22$ | $ 4$ |
| $ 22 = 5 \times  4 +  2$ | $ 4$ | $ 2$ |
| $  4 = 2 \times  2 +  0$ | $ 2$ | $ 0$ |
{{</table>}}
Here, $\\{r_i\\} = \\{100, 26, 22, 4, 2, 0\\}$ and $\\{q_i\\} = \\{3, 1, 5, 2\\}$.

Note that, $gcd(a,b) = gcd(r_0,r_1) = gcd(r_1,r_2) = ... = gcd(r_{-3},r_{i-2})$ and $gcd(r_{i-1}) = 0$

So, $gcd(100, 26) = 2$

## B&eacute;zout's identity

**Theorem -** for two integers $a$ & $b$, $\exists$ integers $x$ & $y$ such that $ax+by=d$,
where $d=gcd(a,b)$

Moreover all integers of the type $ax+by$ are divisible by $d$.
Note that B&eacute;zout coefficients($x$ and $y$) are not unique.

*For example*, for $a=3$ and $b=5$, we have $d=1$ and $2a-b=d$.
This means $(x, y)=(2,-1)$ is one solution.
Ofcourse, all pairs of the form $(2+5k,-1-3k)$ are valid coefficients.

The simplest way to find one of these pairs is by using [Extended Euclidean Algorithm](#extended-euclidean-algorithm),
with $|x| \le \left | \frac{b}{d}\right |$ and $|y|\le\left |\frac{a}{d}\right |$.
For a given solution $(x,y)$, we can generate all possible coefficients by using $\left(x+k\frac{b}{d},\ y-k\frac{a}{d}\right)$,
for any integer $k$ where all these fractions simplify to integers.

Convince yoursef.
Hint - {{<spoiler>}}Let $ax_0+by_0=0$ be for some $(x_0,y_0)$.
For all integer $k$, $ax+by = (ax+by)+k\cdot(ax_0+by_0)$, so new solutions will be of the form $(x+kx_0,y+ky_0)${{</spoiler>}}

> **Shortcut** - If $gcd(n_1,n_2) = 1$, then $x \equiv n_{1}^{-1} (mod~n_2)$ and $y \equiv n_{2}^{-1} (mod~n_1)$

## Extended Euclidean Algorithm

This is an extension of [Euclidean Algorithm](#greatest-common-divisor),
which also provides B&eacute;zout coefficients along with the GCD.

It also uses Euclidean algorithm, but also finds r as a linear combination of $a$ and $b$

Let us define 4 sequences $\\{q_i\\}$, $\\{r_i\\}$, $\\{x_i\\}$, $\\{y_i\\}$.
The sequences $\\{q_i\\}$, $\\{r_i\\}$ are the same ones from Euclidean Algorithm,
that is, $r_{i-2} = r_{i-1}q_{i}+r_i$, $r_0=a$, $r_1=b$, $r_{i-1} = 0$ for some i.
We also need to write $r_i$ as linear combination of $a$ and $b$, such that $r_i = x_ia+y_ib$

Now, $r_i = r_{i-2}-r_{i-1}q_i$ and $r_i = x_ia+y_ib$

Substituting values of $r$ in $x$ and $y$, we get
$(x_ia+y_ib) = (x_{i-2}a+y_{i-2}b) - (x_{i-1}a+y_{i-1}b)q_i$,
which gives us the relations

$x_i = x_{i-2} - x_{i-1}q_i$ and $y_i = y_{i-2} - y_{i-1}q_i$

Also, $r_0 = a = x_0a+y_0b$ and $r_1 = b = x_1a+y_ib$,
which gives us inital values $x_0=1$, $y_0=0$, $x_1=0$, $y_1=1$,

{{<prismjs lang="python">}}
def egcd(a, b):
	# returns (GCD(a, b), x, y)
	# where x & y follow ax + by = GCD(a, b)
	old_x, new_x = 1, 0
	old_y, new_y = 0, 1
	while a != 0:
		q, a, b = b//a, b%a, a # From division lemma
		new_x, old_x = old_x, new_x - q * old_x
		new_y, old_y = old_y, new_y - q * old_y
	return b, new_x, new_y
{{</prismjs>}}

## Chinese Remainder Theorem

Theorem - Given $n_1, n_2, ... , n_i$ pairwise co-prime positive integers
(all numbers are co-prime to each other),
with $N$ = product of all $n_i$, =
and $a_1, a_2, ... , a_i$ integers with $0 \le a_i \lt n_i$ for each $i$,
then there is one and only one positive integer $x$ in $0 \le x \lt N$,
such that remainder of integer divison of $x$ by $n_j$ is $a_j$ for every j.

In other words, there is always a unique solution for x between $0$ and $N$ for -
{{<tex display>}}
\begin{aligned}
	x \equiv & n_0 (mod~a_0) \\
	x \equiv & n_1 (mod~a_1) \\
	         & \vdots \\
	x \equiv & n_i (mod~a_i)
\end{aligned}
{{</tex>}}


Let us first solve it for 2 moduli only,
say $x \equiv a_1 (mod~n_1)$ and $x \equiv a_2 (mod~n_2)$.
Then using [B&eacute;zout's Identity](#b&eacute;zouts-identity),
there exists integers $m_1$ and $m_2$ such that $m_1n_1 + m_2n_2 = 1$.
We can easily verify that the solution to this equation is $x \equiv a_1m_2n_2+a_2m_1n_1 (mod~n_1n_2)$

For n equations, we can apply the above result n-1 times,
since the resultant modulus($n_1n_2$) will also be co-prime to other remaining moduli.

> **Single Step Computation** - For $k$ equations, $x \equiv \displaystyle\sum_{i=1}^{k}a_iM_iN_i~(mod~N)$, where $N = \displaystyle\prod_{i=1}^{k} n_i$, $N_i = \dfrac{N}{n_i}$ and $M_iN_i + m_in_i = 1$(from B&eacute;zout's Identity) or directly, $M_i = N_i^{-1} (mod~n_i)$

This single step computation may not be very useful, because as we increase the number of moduli, their product becomes very large for efficient computation.