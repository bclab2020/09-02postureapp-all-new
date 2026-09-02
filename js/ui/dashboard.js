/**
 * (c) Athletecore Proprietary Biomechanical Engine
 * CONFIDENTIAL & PROTECTED - ALL RIGHTS RESERVED.
 */
var _0x$b=["PGgyPiQxPC9oMj4=","PGxpPjxzdHJvbmc+JDE8L3N0cm9uZz46IA==","PGxpPiQxPC9saT4=","PHA+PC9wPg==","PGJyPg==","ZGFzaGJvYXJkQ2xvc2VCdG4=","ZGFzaGJvYXJkT3ZlcmxheQ==","bm9uZQ==","aGlzdG9yeUJhdGNo","ZHluQ29uZmlybUhpc3Rvcnk=","ZHJhZnQ=","ZmluYWw=","W2Rhc2hib2FyZF0gRmFpbGVkIHRvIGF1dG8tZmluYWxpemUgc3RhdGljIGJhdGNoIG9uIHJlcG9ydCB2aWV3","YmF0Y2hSZXZpZXdPdmVybGF5","ZnVuY3Rpb24=","ZGFzaEdyaWQ=","PGRpdiBzdHlsZT0iZ3JpZC1jb2x1bW46IDEvLTE7IGNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZSk7IHRleHQtYWxpZ246Y2VudGVyOyBmb250LXNpemU6MjBweDsgcGFkZGluZzo1MHB4OyI+8J+ThCDjg6zjg53jg7zjg4jnlJ/miJDkuK0uLi48L2Rpdj4=","YmxvY2s=","44Ky44K544OI","c2Vzc2lvbi5jYXB0dXJlZFJvbGxEZWc=","c2Vzc2lvbi5jYW52YXNXaWR0aC9IZWlnaHQ=","bnVtYmVy","Z2VtaW5pX2FwaV9rZXk=","IyMjIOOCqOODqeODvFxu44Os44Od44O844OI44Gu55Sf5oiQ44Gr5aSx5pWX44GX44G+44GX44GfOiA=","ZnJvbnQ=","bF9zaWRl","YmFjaw==","cl9zaWRl","W2Rhc2hib2FyZF0gNOaWueWQkee3j+WQiOaJgOimi+OBrueUn+aIkOOBq+WkseaVl+OBl+OBvuOBl+OBnzo=","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIj48aDM+8J+njSDooqvmuKzlrprogIXjg5fjg63jg5XjgqHjgqTjg6s8L2gzPg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuawj+WQjSAvIElEPC9zcGFuPjxzcGFuIGNsYXNzPSJ2YWwiPg==","IOanmDwvc3Bhbj48L2Rpdj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPua4rOWumuODouODvOODiTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PC9zcGFuPjwvZGl2Pg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPui6q+mVtzwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","IGNtPC9zcGFuPjwvZGl2Pg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPui2s+OBruOCteOCpOOCujwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuOCueOCseODvOODqzwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","IHB4L2Nt","5pyq5qCh5q2jICjoh6rli5Xmjqjlrpop","PC9kaXY+","5YmN6Z2i","5bem5YG06Z2i","5b6M6Z2i","5Y+z5YG06Z2i","44Kx44Oz44OA44Or5Z6C55u05Z+65rqW57ea","6I236YeN44OQ44Op44Oz44K55q+U546H5a++6LGh","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLWNhcmQiPjxpbWcgc3JjPSI=","IiBhbHQ9Ig==","Ij4=","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLWxhYmVsIj7wn6eNIA==","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLXN1YiI+","PC9kaXY+PC9kaXY+","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLWNhcmQiIHN0eWxlPSJvcGFjaXR5OiAwLjQ7Ij4=","PGRpdiBzdHlsZT0iYXNwZWN0LXJhdGlvOjQvMzsgYmFja2dyb3VuZDojMGYxYzNmOyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyBib3JkZXItcmFkaXVzOjRweDsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGNvbG9yOnZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOjExcHg7Ij7mnKrmuKzlrpo8L2Rpdj4=","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLXN1YiI+44OH44O844K/44Gq44GXPC9kaXY+PC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIHJlcG9ydC1pbWFnZS1zZWN0aW9uIiBzdHlsZT0iZ3JpZC1jb2x1bW46IDEgLyAtMTsiPg==","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLXRpdGxlIj7wn5O4IOmdmeatouWnv+WLouOCouODqeOCpOODoeODs+ODiCA05pa55ZCR5YiG5p6Q55S75YOPPC9kaXY+","PGRpdiBjbGFzcz0icmVwb3J0LWltYWdlLWdyaWQiPg==","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIGFpLWV2YWwtY2FyZCIgc3R5bGU9ImdyaWQtY29sdW1uOiAxIC8gLTE7Ij48aDM+8J+nrSA05pa55ZCR57eP5ZCI5omA6KaLPC9oMz4=","PGRpdiBjbGFzcz0iYWktZXZhbC1ib3giPg==","PGRpdiBzdHlsZT0iY29sb3I6dmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6MTFweDsgbWFyZ2luLXRvcDo4cHg7Ij7igLsg6KSH5pWw5pa55ZCR44Gu5ris5a6a57WQ5p6c44KS5qiq5pat44GX44Gm6KaL44Gf5Y+C6ICD5omA6KaL44Gn44GZ44CC5ZCE5pa55ZCR44GU44Go44Gu6Kmz57Sw6KmV5L6h44Gv5LiL6KiY44KS44GU56K66KqN44GP44Gg44GV44GE44CCPC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIj48aDM+4pqW77iPIOW3puWPs+iNt+mHjeODkOODqeODs+OCuQ==","PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxMXB4OyBjb2xvcjojYjM4OGZmOyBmb250LXdlaWdodDo0MDA7Ij7vvIjmraPkuK3nt5o6IOOCouODq+OCs+ODnuODvOOCq+ODvOWfuua6lu+8iTwvc3Bhbj4=","PC9oMz4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuWFqOi6q+iNt+mHjSAo5bemIC8g5Y+zKTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIA==","d2Fybg==","Z29vZA==","JSAvIA==","JTwvc3Bhbj48L2Rpdj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuS4iuWNiui6q+iNt+mHjSAo5bemIC8g5Y+zKTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuS4i+WNiui6q+iNt+mHjSAo5bemIC8g5Y+zKTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuOCouOCt+ODs+ODoeODiOODquODvOWBj+S9jTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","JSA=","4pqg77iP","PC9zcGFuPjwvZGl2PjwvZGl2Pg==","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIj48aDM+8J+TiCBDT1Dph43lv4Pli5Xmj7rjgqLjgrvjgrnjg6Hjg7Pjg4g=","77yINOmahUFyVWNv5bqK6Z2i5a6f5ris44O75a6f5a+477yJ","77yI5Y+C6ICD5YCk44O7bW3ov5HkvLzmj5vnrpfvvIk=","PGltZyBzcmM9Ig==","IiBhbHQ9IkNPUOi7jOi3oSIgc3R5bGU9IndpZHRoOjEwMCU7IG1heC13aWR0aDozMjBweDsgZGlzcGxheTpibG9jazsgbWFyZ2luOjAgYXV0byAxMHB4OyBib3JkZXItcmFkaXVzOjhweDsiPg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuWLleaPuumdouepjSAoRWxsaXBzZSk8L3NwYW4+PHNwYW4gY2xhc3M9InZhbCA=","IG1twrI8L3NwYW4+PC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPue3j+WLleaPuui7jOi3oemVtzwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","IG1tPC9zcGFuPjwvZGl2Pg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuW5s+Wdh+WLleaPuumAn+W6pjwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","IG1tL3M=","566X5Ye65LiN5Y+v","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuS4reW/g+WBj+S9jSAoWOi7uCk8L3NwYW4+PHNwYW4gY2xhc3M9InZhbCI+","IG1tICg=","5Y+z5a+E44KK","5bem5a+E44KK","KTwvc3Bhbj48L2Rpdj4=","PGRpdiBzdHlsZT0iY29sb3I6dmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBmb250LXNpemU6MTFweDsgbWFyZ2luLXRvcDo2cHg7Ij7lj4LogIPlgKTjgafjgZnvvIg06ZqFQXJVY2/luorpnaLjgq3jg6Pjg6rjg5bjg6zjg7zjgrfjg6fjg7PmnKrlrp/mlr3jga7jgZ/jgoHjgIFweFRvQ21SYXRpb+OBq+OCiOOCi+i/keS8vOaPm+eul+WApOOCkuihqOekuuOBl+OBpuOBhOOBvuOBme+8iTwvZGl2Pg==","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIj48aDM+8J+TkCDmuKzlrprplqLnr4Dop5Lluqbjg7vlj6/li5Xln588L2gzPg==","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuW3puiGnemWouevgOinkuW6pjwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","wrA8L3NwYW4+PC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuWPs+iGnemWouevgOinkuW6pjwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuS9k+W5ueWJjeWCvuinkuW6pjwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuiGneWxiOabsuinkuW6piAo5YG06Z2iKTwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuS4iuiFleaMmeS4iuinkuW6pjwvc3Bhbj48c3BhbiBjbGFzcz0idmFsIj4=","PGRpdiBjbGFzcz0iZGFzaC1tZXRyaWMiPjxzcGFuPuWJjeWxiC/lvozlsYjogqHplqLnr4Dop5LluqY8L3NwYW4+PHNwYW4gY2xhc3M9InZhbCI+","5b6M6aCt5LiL562L576k","5YOn5bi9562L5LiK6YOo","6IO46Y6W5Lmz56qB562LKOefree4rik=","6aCa6YOo5rex5bGk5bGI562L576k","5bCP6IO4562LKOefree4ruODu+W3u+OBjeiCqSk=","5YOn5bi9562L5LiK6YOoKOS7o+WEn+aAp+mBjue3iuW8tSk=","5aSn6IO4562L","6I+x5b2i562LKOiDjOmDqOiEseWKmyk=","5YmN6Yu4562L","5YOn5bi9562L5LiL6YOo","6IO45qSO5Ly45bGV562L576kKOmBjuW5s+iDjCk=","6IO45qSO55Sf55CG55qE5b6M5byv5qmf6IO9","44OP44Og44K544OI44Oq44Oz44Kw44K5KOmBjue3iuW8tSk=","5aSn6IW/562L6Iac5by1562L","6IWw6YOo5qSO6ZaT6Zai56+A5Ymq5pat","5aSn6IeA562LKOS4jea0u+aAp+WMlik=","6IW46IWw562LKOS8uOW8teiEseWKmyk=","6IW55qiq562LKOOCs+OCoik=","6IW46IWw562LKOefree4rik=","5aSn6IW/55u0562L","6IWw6IOM6YOo6ISK5p+x6LW356uL562L","6IW555u0562L","5aSn6IeA562L","44Gq44GX77yI5q2j5bi45Y2U6Kq/77yJ","44Gq44GX77yI5q2j5bi45rS75oCn77yJ","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIG11c2N1bG9za2VsZXRhbC1jYXJkIiBzdHlsZT0iZ3JpZC1jb2x1bW46IDEgLyAtMTsgYmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuOSk7IGJvcmRlcjoxcHggc29saWQgIzFlMjkzYjsgYm9yZGVyLXJhZGl1czoxMnB4OyBwYWRkaW5nOjE2cHg7Ij4=","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBwYWRkaW5nLWJvdHRvbToxMHB4OyBtYXJnaW4tYm90dG9tOjE0cHg7IGZsZXgtd3JhcDp3cmFwOyBnYXA6OHB4OyI+","PGRpdj48aDMgc3R5bGU9Im1hcmdpbjowOyBmb250LXNpemU6MTVweDsgY29sb3I6dmFyKC0tdGV4dC1wcmltYXJ5KTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDo2cHg7Ij7wn6esIOefoueKtumdoiDku6PlhJ/nrYvpqqjmoLzop6PmnpAgPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxMXB4OyBjb2xvcjojOTRhM2I4OyBmb250LXdlaWdodDpub3JtYWw7Ij4oSmFuZGEgLyBLZW5kYWxsIC8gSGFuc3JhaiAvIFBsYWdlbmhvZWYg6YCj6Y6W44Oi44OH44OrKTwvc3Bhbj48L2gzPg==","PGRpdiBzdHlsZT0iZm9udC1zaXplOjExcHg7IGNvbG9yOnZhcigtLXRleHQtc2Vjb25kYXJ5KTsgbWFyZ2luLXRvcDoycHg7Ij7lrp/muKzjgqrjg5Xjgrvjg4Pjg4g6IEMyIA==","Y20gLyBUaDMg","Y20gLyBTMiA=","Y20=","ICjlubTpvaIg","5q2z6YGp5b+cKQ==","PGJ1dHRvbiB0eXBlPSJidXR0b24iIGlkPSJvcGVuQ291bnNlbGluZ0Zyb21SZXBvcnRCdG4iIGNsYXNzPSJidG4iIHN0eWxlPSJiYWNrZ3JvdW5kOiMwZjE3MmE7IGJvcmRlcjoxcHggc29saWQgIzM4YmRmODsgY29sb3I6IzM4YmRmODsgZm9udC1zaXplOjExcHg7IHBhZGRpbmc6NXB4IDEycHg7IGJvcmRlci1yYWRpdXM6NnB4OyBjdXJzb3I6cG9pbnRlcjsiPuOCt+ODn+ODpeODrOODvOOCv+ODvOOBp+eiuuiqjSDihpc8L2J1dHRvbj4=","PGRpdiBzdHlsZT0iZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTsgZ2FwOjE2cHg7IGFsaWduLWl0ZW1zOmNlbnRlcjsiPg==","PGRpdiBzdHlsZT0iYmFja2dyb3VuZDojMDYwOTEzOyBib3JkZXI6MXB4IHNvbGlkICMxZTI5M2I7IGJvcmRlci1yYWRpdXM6MTBweDsgcGFkZGluZzoxMHB4OyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyOyI+","PGNhbnZhcyBpZD0iZGFzaE11c2NsZUNhbnZhcyIgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIHN0eWxlPSJtYXgtd2lkdGg6MjYwcHg7IHdpZHRoOjEwMCU7IGFzcGVjdC1yYXRpbzoxLzE7Ij48L2NhbnZhcz4=","PGRpdiBzdHlsZT0id2lkdGg6MTAwJTsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOjlweDsgY29sb3I6I2NiZDVlMTsgYmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuOCk7IHBhZGRpbmc6M3B4IDhweDsgYm9yZGVyLXJhZGl1czo0cHg7IG1hcmdpbi10b3A6NHB4OyI+","PHNwYW4gc3R5bGU9ImNvbG9yOiNlMTFkNDg7Ij7ilqAg6YGO57eK5by1PC9zcGFuPjxzcGFuIHN0eWxlPSJjb2xvcjojNjQ3NDhiOyI+4pagIOato+W4uDwvc3Bhbj48c3BhbiBzdHlsZT0iY29sb3I6IzM4YmRmODsiPi0tIOOCteODnOOCiuetizwvc3Bhbj4=","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDo4cHg7Ij4=","PGRpdiBzdHlsZT0iYmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuOCk7IGJvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgYm9yZGVyLXJhZGl1czo4cHg7IHBhZGRpbmc6OHB4IDEwcHg7Ij4=","PGRpdiBzdHlsZT0iZm9udC1zaXplOjExcHg7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6dmFyKC0tdGV4dC1wcmltYXJ5KTsgbWFyZ2luLWJvdHRvbTo0cHg7Ij7wn5OKIOiEiuafsTPlpKfjgrvjgrDjg6Hjg7Pjg4jpgKPli5XosqDojbfop6PmnpA8L2Rpdj4=","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOjEwLjVweDsgbWFyZ2luLWJvdHRvbToycHg7Ij48c3Bhbj7wn6egIOmgmuakjuWun+WKueiyoOiNtyAoQzIpPC9zcGFuPjxzcGFuIHN0eWxlPSJjb2xvcjojZjhmYWZjOyBmb250LWZhbWlseTptb25vc3BhY2U7IGZvbnQtd2VpZ2h0OmJvbGQ7Ij4=","IGtnICg=","5YCNKTwvc3Bhbj48L2Rpdj4=","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOjEwLjVweDsgbWFyZ2luLWJvdHRvbToycHg7Ij48c3Bhbj7wn6uBIOiDuOakjuWJquaWreiyoOiNtyAoVGgzKTwvc3Bhbj48c3BhbiBzdHlsZT0iY29sb3I6I2Y4ZmFmYzsgZm9udC1mYW1pbHk6bW9ub3NwYWNlOyBmb250LXdlaWdodDpib2xkOyI+","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOjEwLjVweDsiPjxzcGFuPvCfprQg6IWw5qSOKEw1LVMxKeWJquaWreWKmzwvc3Bhbj48c3BhbiBzdHlsZT0iY29sb3I6I2Y4ZmFmYzsgZm9udC1mYW1pbHk6bW9ub3NwYWNlOyBmb250LXdlaWdodDpib2xkOyI+","PGRpdiBzdHlsZT0iYmFja2dyb3VuZDpyZ2JhKDIyNSwyOSw3MiwwLjEpOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjI1LDI5LDcyLDAuMyk7IGJvcmRlci1yYWRpdXM6NnB4OyBwYWRkaW5nOjhweCAxMHB4OyI+","PGRpdiBzdHlsZT0iZm9udC1zaXplOjEwLjVweDsgZm9udC13ZWlnaHQ6NjAwOyBjb2xvcjojZmI3MTg1OyBtYXJnaW4tYm90dG9tOjJweDsiPvCflKUg6YGO5Ymw5L2c55So77yI44Ok44Oz44OA6YGO57eK5by1562L77yJOjwvZGl2Pg==","PGRpdiBzdHlsZT0iZm9udC1zaXplOjExcHg7IGNvbG9yOiNmMWY1Zjk7Ij4=","PGRpdiBzdHlsZT0iYmFja2dyb3VuZDpyZ2JhKDU2LDE4OSwyNDgsMC4xKTsgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDU2LDE4OSwyNDgsMC4zKTsgYm9yZGVyLXJhZGl1czo2cHg7IHBhZGRpbmc6OHB4IDEwcHg7Ij4=","PGRpdiBzdHlsZT0iZm9udC1zaXplOjEwLjVweDsgZm9udC13ZWlnaHQ6NjAwOyBjb2xvcjojMzhiZGY4OyBtYXJnaW4tYm90dG9tOjJweDsiPvCfkqQg5LiN5rS75oCn5YyW77yI44Ok44Oz44OA5byx5YyW44O744K144Oc44KK562L77yJOjwvZGl2Pg==","PGRpdiBzdHlsZT0iZm9udC1zaXplOjEwcHg7IGNvbG9yOnZhcigtLXRleHQtc2Vjb25kYXJ5KTsgbGluZS1oZWlnaHQ6MS40OyBtYXJnaW4tdG9wOjJweDsiPuKAuyDlgbTpnaLjga7pqqjmoLzlub7kvZXjgqLjg6njgqTjg6Hjg7Pjg4jjgYvjgonjgIHph43lv4Pkv53mjIHjga7jgZ/jgoHjgavpgY7osqDojbfjgajjgarjgaPjgabjgYTjgovnrYvnvqTjgYrjgojjgbPmqZ/og73kvY7kuIvjgZfjgabjgYTjgovnrYvnvqTjgpLoh6rli5XnibnlrprjgZfjgabjgYTjgb7jgZnjgII8L2Rpdj4=","PC9kaXY+PC9kaXY+PC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIGV4cGVydC1jYXJkIiBzdHlsZT0iZ3JpZC1jb2x1bW46IDEgLyAtMTsiPg==","PGgzPvCfk50g5bCC6ZaA5a6244O75oyH5bCO6ICF44Kr44Or44OG6KmV5L6h5YWl5Yqb77yI5LqL5qWt6ICF5bCC55So77yJPC9oMz4=","PGRpdiBjbGFzcz0iaW5wdXQtZmllbGQiPjxsYWJlbCBmb3I9ImV4cGVydENvbW1lbnRJbnB1dCIgc3R5bGU9ImNvbG9yOnZhcigtLWFjY2VudC1vcmFuZ2UpOyI+5oyH5bCO6ICF44Ki44K744K544Oh44Oz44OI44O744OV44Kj44O844OJ44OQ44OD44KvPC9sYWJlbD4=","PHRleHRhcmVhIGlkPSJleHBlcnRDb21tZW50SW5wdXQiIHN0eWxlPSJ3aWR0aDoxMDAlOyBoZWlnaHQ6ODBweDsgYmFja2dyb3VuZDojMGYxYzNmOyBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWFjY2VudC1vcmFuZ2UpOyBib3JkZXItcmFkaXVzOjhweDsgY29sb3I6d2hpdGU7IHBhZGRpbmc6MTBweDsgZm9udC1mYW1pbHk6aW5oZXJpdDsgcmVzaXplOm5vbmU7IG91dGxpbmU6bm9uZTsgYm94LXNpemluZzpib3JkZXItYm94OyI+","PC90ZXh0YXJlYT48L2Rpdj4=","PGRpdiBjbGFzcz0iaW5wdXQtZmllbGQiPjxsYWJlbCBmb3I9ImV4cGVydEV4ZXJjaXNlc0lucHV0IiBzdHlsZT0iY29sb3I6dmFyKC0tYWNjZW50LW9yYW5nZSk7Ij7lh6bmlrnjgrnjg4jjg6zjg4Pjg4Hjg7vjg4jjg6zjg7zjg4vjg7PjgrDjg6rjg4/jg5Pjg6rjg6Hjg4vjg6Xjg7w8L2xhYmVsPg==","PHRleHRhcmVhIGlkPSJleHBlcnRFeGVyY2lzZXNJbnB1dCIgc3R5bGU9IndpZHRoOjEwMCU7IGhlaWdodDo4MHB4OyBiYWNrZ3JvdW5kOiMwZjFjM2Y7IGJvcmRlcjoxcHggc29saWQgdmFyKC0tYWNjZW50LW9yYW5nZSk7IGJvcmRlci1yYWRpdXM6OHB4OyBjb2xvcjp3aGl0ZTsgcGFkZGluZzoxMHB4OyBmb250LWZhbWlseTppbmhlcml0OyByZXNpemU6bm9uZTsgb3V0bGluZTpub25lOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7Ij4=","PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IG1hcmdpbi10b3A6MTBweDsiPg==","PGJ1dHRvbiBvbmNsaWNrPSJzYXZlRXhwZXJ0Q29tbWVudCgpIiBjbGFzcz0iYnRuIHByaW1hcnktYnRuIiBzdHlsZT0iYmFja2dyb3VuZDp2YXIoLS1hY2NlbnQtb3JhbmdlKTsgY29sb3I6YmxhY2s7IGZvbnQtd2VpZ2h0OjcwMDsiPvCfk4sg6KmV5L6h44KS44Kr44Or44OG44Gr5L+d5a2YPC9idXR0b24+PC9kaXY+PC9kaXY+","PGRpdiBjbGFzcz0iZGFzaC1jYXJkIGFpLWV2YWwtY2FyZCIgaWQ9ImFpRXZhbENhcmQiPjxoMz7wn6egIEFJIOiHqOW6iuOCpOODs+OCteOCpOODiOODu+OCouOCu+OCueODoeODs+ODiDwvaDM+","PGRpdiBjbGFzcz0iYWktZXZhbC1ib3giIGlkPSJhaUV2YWxDb250ZW50Ij4=","ZGFzaE11c2NsZUNhbnZhcw==","b3BlbkNvdW5zZWxpbmdGcm9tUmVwb3J0QnRu"];
function _0x$d(i){try{return decodeURIComponent(escape(atob(_0x$b[i])));}catch(e){return atob(_0x$b[i]);}}
/**
 * dashboard.js
 * ---------------------------------------------------------------------------
 * 測定完了後のダッシュボード/レポート画面の生成。api.js（Gemini AIまたは
 * オフラインルールベース）による臨床レポート文と、biomechanics.jsで
 * 算出した各種指標をカード形式で表示する。
 */

import { state, reportDataStore, getEffectiveArucoMidlineX, isStaticMode, STATIC_MODES } from '../core/state.js';
import { patientNameInput, heightInput, footSizeInput } from '../core/dom.js';
import apiManager from '../api.js';
import { saveExpertComment } from './specialist.js';
import biomechanics from '../biomechanics.js';
import { drawPoseOverlay } from './controls.js';
import { openCounselingModal } from './counseling.js';

/**
 * レポート本文(Markdown)を表示用HTMLへ変換する共通ヘルパー。
 * 既存の単一ポーズ向けAIレポートと、v4.6.16で追加した「4方向総合所見」
 * の両方から使う（元は前者用に個別実装されていたロジックをそのまま抽出）。
 */
function formatMarkdownToHtml(markdown) {
    return (markdown || "")
        .replace(/### (.*)/g, _0x$d(0))
        .replace(/## (.*)/g, _0x$d(0))
        .replace(/- \*\*(.*?)\*\*:/g, _0x$d(1))
        .replace(/- (.*)/g, _0x$d(2))
        .replace(/\n\n/g, _0x$d(3))
        .replace(/\n/g, _0x$d(4));
}

var _dataService = null;

export function initDashboard(dataService) {
    _dataService = dataService;
    window.saveExpertComment = function () { saveExpertComment(dataService); };

    // 「✖ 閉じる」は通常ただ閉じるだけでよいが、履歴の4面まとめ画面
    // （js/ui/batchReview.jsのhistoryモード）からレポートを開いた場合は、
    // 閉じたあとに元の4面まとめ画面へ戻す必要があるため、
    // state.dashboardReturnTargetを見て振り分ける。
    var dashboardCloseBtn = document.getElementById(_0x$d(5));
    if (dashboardCloseBtn) {
        dashboardCloseBtn.onclick = function () {
            document.getElementById(_0x$d(6)).style.display = _0x$d(7);
            // 「4方向総合所見」用に一時的にセットされたmultiViewSessionIdsは、
            // レポートを閉じた時点で必ずクリアする。次に開くレポートが
            // 単独セッション由来なのか4面まとめ由来なのかは、その都度
            // 呼び出し側が明示的にセットし直す設計（js/ui/batchReview.js参照）。
            state.multiViewSessionIds = null;
            if (state.dashboardReturnTarget === _0x$d(8)) {
                state.dashboardReturnTarget = null;
                if (window.__showHistoryBatchView) window.__showHistoryBatchView();
            } else if (state.dashboardReturnTarget === _0x$d(9)) {
                // 動作解析の撮影確認画面(js/ui/dynConfirm.js)の履歴モードから
                // 「📄 レポートを見る」を開いた場合、閉じたら同じ確認画面へ
                // 戻す（historyBatchと同じ考え方、v4.6.24）。
                state.dashboardReturnTarget = null;
                if (window.__showDynConfirmHistoryView) window.__showDynConfirmHistoryView();
            }
        };
    }

    window.prepareAndPrintReport = async function () {
        // 2026-08-18追加: 静止4方向は本来、撮影完了直後に自動で出る「4面確認・
        // 修正画面」の「✅ この内容で確定してレポート作成」（js/ui/batchReview.js
        // のfinalizeBatch()）から確定するのが正規の経路で、これを通ると4方向が
        // status:_0x$d(10)→_0x$d(11)になり、履歴一覧で1件の「4面測定」としてまとまる
        // （js/ui/history.jsのisGroupable判定）。しかし各ポーズ撮影直後の再生
        // ツールバーに常設されている「📄 レポート」ボタン（#printReportBtn、
        // 個々のポーズをその場で確認する用途）を、4面目（右側面）の直後に押すと、
        // 4面確認画面を経由せずレポートだけが表示され、裏の4セッションは
        // draftのまま確定されずに残ってしまう不具合があった（企画者からのご指摘、
        // 2026-08-18：「履歴一覧に4面がバラバラの未確定項目として並ぶ」）。
        // ここでは「ライブ撮影中（履歴閲覧・微調整中ではない）・静止4方向・
        // 4面すべて撮り終えている」場合に限り、レポート生成の直前に4セッションを
        // まとめて確定する。finalizeBatch()と同じ処理をここでも行うことで、
        // どちらのボタンからレポートを見ても履歴が正しく1件にまとまるようにする。
        // 4面が揃っていない途中経過での単独プレビュー（例: 前面だけ撮って
        // 気になって確認する）では発動しない（batchIds.lengthが4未満のため）。
        if (!state.isHistoryPlaybackSession && isStaticMode(state.currentTab) && _dataService) {
            var batchIds = STATIC_MODES.map(function (m) { return state.currentBatchSessionIds[m]; }).filter(Boolean);
            if (batchIds.length === STATIC_MODES.length) {
                try {
                    for (var bi = 0; bi < batchIds.length; bi++) {
                        await _dataService.finalizeSession(batchIds[bi]);
                    }
                } catch (e) {
                    console.error(_0x$d(12), e);
                }
                var stillOpenBatchOverlay = document.getElementById(_0x$d(13));
                if (stillOpenBatchOverlay) stillOpenBatchOverlay.style.display = _0x$d(7);
                STATIC_MODES.forEach(function (m) { state.currentBatchSessionIds[m] = null; });
                if (typeof window.refreshHistoryList === _0x$d(14)) window.refreshHistoryList();
            }
        }

        var overlay = document.getElementById(_0x$d(6));
        var grid = document.getElementById(_0x$d(15));

        grid.innerHTML = _0x$d(16);
        overlay.style.display = _0x$d(17);

        var patName = patientNameInput.value.trim() || _0x$d(18);

        var activeSession = {
            mode: state.currentTab,
            timestamp: Date.now(),
            patientName: patName,
            height: parseFloat(heightInput.value) || 170,
            footSize: parseFloat(footSizeInput.value) || 25,
            pelvicTilt: state.estimatedPelvicTilt,
            pxToCmRatio: state.pxToCmRatio,
            // 2026-08-03追加: 重心動揺(sway)の実寸mm指標(js/api.js参照)に使う。
            // 撮影直後はライブの現在値、履歴からのレポート表示は
            // dynConfirm.jsのviewHistoryReport()がこのセッション撮影時点の
            // 値へ揃えてから呼ぶ（pxToCmRatioと同じ考え方）。
            floorHomography: state.floorHomography,
            // 2026-08-05追加: 研究機関向け「静止姿勢: アルコ正中線モード」。
            // 撮影直後はライブの現在値、履歴からのレポート表示はdynConfirm.js
            // のviewHistoryReport()/batchReview.jsの報告書生成箇所が、この
            // セッション撮影時点の値へ揃えてから呼ぶ（pxToCmRatioと同じ
            // 考え方）。js/api.jsのextractMetrics()が荷重左右比率の基準点
            // 差し替えに使う。getEffectiveArucoMidlineX()で「トグルON かつ
            // 静止4方向 かつ 校正済み」の場合だけ値を渡す（stateの
            // arucoMidlineX自体はuseArucoMidlineがOFFでも校正さえあれば
            // 値を保持し続けるため、ここでゲートしないとOFF時にも
            // 誤って使われてしまう）。
            capturedArucoMidlineX: getEffectiveArucoMidlineX(state.currentTab),
            capturedArucoMidlineY: (getEffectiveArucoMidlineX(state.currentTab) !== null) ? state.arucoMidlineY : null,
            // 2026-08-05追加（不具合修正）: 静止4方向のroll（端末傾き）補正
            // （v4.6.20）・アルコ正中線のroll補正（v4.9.0）が、js/api.jsの
            // extractMetrics()内で_0x$d(19)と
            // _0x$d(20)の有無を見て発動する作りになって
            // いるにもかかわらず、このactiveSessionオブジェクトが元々この
            // 3項目を含んでいなかったため、レポート表示のどの経路からでも
            // roll補正が実質的に発動しない状態になっていた（発見・修正:
            // 2026-08-05）。capturedRollDegは「両足首中点の再定義」と違い
            // 撮影時点ごとに凍結される値（同じ理由でcontrols.jsの
            // saveEditsAndReturnTo*系が使っているstate.activeSessionCaptured
            // RollDeg等の「ステージング用フィールド」と全く同じ考え方）
            // なので、ここではstate.pxToCmRatio等と違い直接stateの生値では
            // なく、この専用ステージングフィールドを読む。呼び出し元
            // （js/ui/batchReview.js・js/ui/dynConfirm.js・js/ui/history.js・
            // js/ui/specialist.js）側で、レポート対象セッションの実際の
            // 値（静止4方向以外は常にnull）へ揃えてからprepareAndPrintReport()
            // を呼ぶ責任を持つ。
            capturedRollDeg: (typeof state.activeSessionCapturedRollDeg === _0x$d(21)) ? state.activeSessionCapturedRollDeg : null,
            canvasWidth: state.activeSessionCanvasWidth || null,
            canvasHeight: state.activeSessionCanvasHeight || null,
            expertComment: state.activeExpertComment,
            expertExercises: state.activeExpertExercises,
            poseData: state.playbackDataMP.length > 0 ? state.playbackDataMP : (reportDataStore[state.currentTab] ? [{ time: Date.now(), mode: state.currentTab, keypoints: reportDataStore[state.currentTab] }] : [])
        };

        var metrics = apiManager.extractMetrics(activeSession);
        var apiKey = localStorage.getItem(_0x$d(22)) || '';

        var reportMarkdown = "";
        try {
            reportMarkdown = await apiManager.generateReport(activeSession, apiKey);
        } catch (e) {
            reportMarkdown = _0x$d(23) + e;
        }

        // --- 4方向総合所見 (multi-view synthesis, v4.6.16で追加) ---
        // state.multiViewSessionIdsは、履歴の4面まとめ画面からのレポート
        // 表示（js/ui/batchReview.jsのviewHistoryBatchReport）や、ライブ
        // 撮影の4面確定直後（finalizeBatch）からのみ明示的にセットされる。
        // それ以外の文脈（履歴の個別セッションのレポート等）では常にnullの
        // ままなので、既存のレポート内容・見た目は一切変わらない。
        var multiViewMarkdown = null;
        try {
            var multiViewIds = state.multiViewSessionIds;
            var multiViewModes = multiViewIds ? [_0x$d(24), _0x$d(25), _0x$d(26), _0x$d(27)].filter(function (m) { return !!multiViewIds[m]; }) : [];
            if (multiViewModes.length >= 2) {
                var metricsByMode = {};
                for (var mvi = 0; mvi < multiViewModes.length; mvi++) {
                    var mvMode = multiViewModes[mvi];
                    var mvSession = await dataService.getSessionFull(multiViewIds[mvMode]);
                    if (mvSession) metricsByMode[mvMode] = apiManager.extractMetrics(mvSession);
                }
                if (Object.keys(metricsByMode).length >= 2) {
                    multiViewMarkdown = await apiManager.generateMultiViewReport(metricsByMode, apiKey);
                }
            }
        } catch (e) {
            console.error(_0x$d(28), e);
            multiViewMarkdown = null;
        }

        var gridHtml = "";

        gridHtml += _0x$d(29) +
            _0x$d(30) + patName + _0x$d(31) +
            _0x$d(32) + apiManager.getModeNameJp(metrics.mode) + _0x$d(33) +
            _0x$d(34) + metrics.height + _0x$d(35) +
            _0x$d(36) + metrics.footSize + _0x$d(35) +
            _0x$d(37) + (metrics.pxToCmRatio ? (1 / metrics.pxToCmRatio).toFixed(1) + _0x$d(38) : _0x$d(39)) + _0x$d(33) +
            _0x$d(40);

        // 2026-08-24追加: レポートに載せる各方向の写真を、キャリブレーション
        // で分かっているカメラのroll角度ぶん回転させ、見た目の垂直を実際の
        // 垂直に近づける（js/biomechanics.jsのrenderUprightPhoto参照）。
        // 角度はreportDataStore[mode].capturedRollDegから読む（写真自体と
        // セットで、js/ui/controls.jsのcaptureSkeletonImage・
        // js/ui/batchReview.js・js/ui/history.jsの各読込/撮影箇所で
        // 保持している）。回転が無い/小さい場合は元画像がそのまま使われる。
        // 2026-08-25変更: reportDataStore[mode]が骨格点の配列（＝クリーンな
        // 写真＋その場で重ね描きできる骨格点データが揃っている）の場合は、
        // renderPhotoWithOverlay()で骨格オーバーレイを重ね描きしてから回転
        // させる。配列でない場合（旧形式データ、js/ui/batchReview.jsの
        // viewHistoryBatchReport参照）は、従来通り写真をそのまま（回転のみ）
        // 表示する。
        var rotatedImagesByMode = {};
        await Promise.all([_0x$d(24), _0x$d(25), _0x$d(26), _0x$d(27)].map(async function (mode) {
            var entry = reportDataStore[mode];
            var srcBase64 = (entry && entry.capturedImage) ? entry.capturedImage : null;
            if (!srcBase64) return;
            var rollDeg = (entry && typeof entry.capturedRollDeg === _0x$d(21)) ? entry.capturedRollDeg : null;
            var kps = (entry && Array.isArray(entry) && entry.length > 0) ? entry : null;
            rotatedImagesByMode[mode] = kps
                ? await biomechanics.renderPhotoWithOverlay(srcBase64, function (ctx, w, h) { drawPoseOverlay(ctx, kps, mode, w, h); }, rollDeg)
                : await biomechanics.renderUprightPhoto(srcBase64, rollDeg);
        }));

        var imageCardsHtml = "";
        var modeLabelsJp = { _0x$d(24): _0x$d(41), _0x$d(25): _0x$d(42), _0x$d(26): _0x$d(43), _0x$d(27): _0x$d(44) };
        [_0x$d(24), _0x$d(25), _0x$d(26), _0x$d(27)].forEach(function (mode) {
            var base64 = rotatedImagesByMode[mode] || null;
            if (base64) {
                var subInfo = (mode === _0x$d(25) || mode === _0x$d(27)) ? _0x$d(45) : _0x$d(46);
                imageCardsHtml += _0x$d(47) + base64 + _0x$d(48) + modeLabelsJp[mode] + _0x$d(49) +
                    _0x$d(50) + modeLabelsJp[mode] + _0x$d(40) +
                    _0x$d(51) + subInfo + _0x$d(52);
            } else {
                imageCardsHtml += _0x$d(53) +
                    _0x$d(54) +
                    _0x$d(50) + modeLabelsJp[mode] + _0x$d(40) +
                    _0x$d(55);
            }
        });

        gridHtml += _0x$d(56) +
            _0x$d(57) +
            _0x$d(58) + imageCardsHtml + _0x$d(52);

        if (multiViewMarkdown) {
            gridHtml += _0x$d(59) +
                _0x$d(60) + formatMarkdownToHtml(multiViewMarkdown) + _0x$d(40) +
                _0x$d(61) +
                _0x$d(40);
        }

        if (metrics.weightBearing) {
            var wDiff = Math.abs(metrics.weightBearing.total.L - metrics.weightBearing.total.R);
            gridHtml += _0x$d(62) + (metrics.usedArucoMidline ? _0x$d(63) : '') + _0x$d(64) +
                _0x$d(65) + (wDiff > 5 ? _0x$d(66) : _0x$d(67)) + _0x$d(49) + metrics.weightBearing.total.L.toFixed(1) + _0x$d(68) + metrics.weightBearing.total.R.toFixed(1) + _0x$d(69) +
                _0x$d(70) + metrics.weightBearing.upper.L.toFixed(1) + _0x$d(68) + metrics.weightBearing.upper.R.toFixed(1) + _0x$d(69) +
                _0x$d(71) + metrics.weightBearing.lower.L.toFixed(1) + _0x$d(68) + metrics.weightBearing.lower.R.toFixed(1) + _0x$d(69) +
                _0x$d(72) + wDiff.toFixed(1) + _0x$d(73) + (wDiff > 5 ? _0x$d(74) : '✅') + _0x$d(75);
        }

        if (metrics.swayMetrics) {
            var sw = metrics.swayMetrics;
            var trajectoryImgSrc = biomechanics.renderCopTrajectoryImage(sw.trajectory, sw.precise);
            gridHtml += _0x$d(76) + (sw.precise ? _0x$d(77) : _0x$d(78)) + _0x$d(64) +
                (trajectoryImgSrc ? _0x$d(79) + trajectoryImgSrc + _0x$d(80) : '') +
                _0x$d(81) + (sw.swayArea > 800 ? _0x$d(66) : _0x$d(67)) + _0x$d(49) + sw.swayArea.toFixed(1) + _0x$d(82) +
                _0x$d(83) + sw.pathLength.toFixed(1) + _0x$d(84) +
                _0x$d(85) + (sw.swaySpeed !== null ? sw.swaySpeed.toFixed(1) + _0x$d(86) : _0x$d(87)) + _0x$d(33) +
                _0x$d(88) + sw.avgDeviationX.toFixed(1) + _0x$d(89) + (sw.avgDeviationX > 0 ? _0x$d(90) : _0x$d(91)) + _0x$d(92) +
                (!sw.precise ? _0x$d(93) : '') +
                _0x$d(40);
        }

        if (Object.keys(metrics.jointAngles).length > 0) {
            gridHtml += _0x$d(94);
            if (metrics.jointAngles.leftKneeAngle) gridHtml += _0x$d(95) + metrics.jointAngles.leftKneeAngle.toFixed(1) + _0x$d(96);
            if (metrics.jointAngles.rightKneeAngle) gridHtml += _0x$d(97) + metrics.jointAngles.rightKneeAngle.toFixed(1) + _0x$d(96);
            if (metrics.jointAngles.trunkLean) gridHtml += _0x$d(98) + metrics.jointAngles.trunkLean.toFixed(1) + _0x$d(96);
            if (metrics.jointAngles.kneeFlexion) gridHtml += _0x$d(99) + metrics.jointAngles.kneeFlexion.toFixed(1) + _0x$d(96);
            if (metrics.jointAngles.shoulderArmAngle) gridHtml += _0x$d(100) + metrics.jointAngles.shoulderArmAngle.toFixed(1) + _0x$d(96);
            if (metrics.jointAngles.hipFlexion) gridHtml += _0x$d(101) + metrics.jointAngles.hipFlexion.toFixed(1) + _0x$d(96);
            gridHtml += _0x$d(40);
        }

        // 側方データがある場合の代償筋骨格解析カード生成 (Janda & Kendall 連鎖モデル)
        var sideKps = (reportDataStore[_0x$d(25)] && reportDataStore[_0x$d(25)].length > 0)
            ? reportDataStore[_0x$d(25)]
            : ((reportDataStore[_0x$d(27)] && reportDataStore[_0x$d(27)].length > 0)
                ? reportDataStore[_0x$d(27)]
                : ((metrics.mode === _0x$d(25) || metrics.mode === _0x$d(27)) ? (session.keypoints || null) : null));
        var sideMode = (reportDataStore[_0x$d(25)] && reportDataStore[_0x$d(25)].length > 0) ? _0x$d(25) : ((reportDataStore[_0x$d(27)] && reportDataStore[_0x$d(27)].length > 0) ? _0x$d(27) : metrics.mode);
        var kendallOffsets = sideKps ? biomechanics.extractKendallOffsets(sideKps, sideMode) : null;

        if (kendallOffsets) {
            var c2 = kendallOffsets.c2Cm;
            var th3 = kendallOffsets.th3Cm;
            var s2 = kendallOffsets.s2Cm;

            var patientAge = (session && session.patientAge) ? parseInt(session.patientAge, 10) : null;
            var AGE_PROFILES = {
                child:  { headKg: 3.5, thoracicKg: 9.0,  lumbarKg: 15.0 }, // 6-9歳 (体重約25kg)
                junior: { headKg: 4.2, thoracicKg: 16.0, lumbarKg: 27.0 }, // 10-14歳 (体重約45kg)
                youth:  { headKg: 4.8, thoracicKg: 20.0, lumbarKg: 35.0 }, // 15-18歳 (体重約58kg)
                adult:  { headKg: 5.0, thoracicKg: 23.0, lumbarKg: 40.0 }, // 19-64歳 (体重約65kg)
                senior: { headKg: 4.6, thoracicKg: 20.0, lumbarKg: 35.0 }  // 65歳以上 (体重約58kg)
            };

            var profile = AGE_PROFILES.adult;
            if (patientAge) {
                if (patientAge <= 9) profile = AGE_PROFILES.child;
                else if (patientAge <= 14) profile = AGE_PROFILES.junior;
                else if (patientAge <= 18) profile = AGE_PROFILES.youth;
                else if (patientAge >= 65) profile = AGE_PROFILES.senior;
            }

            var cervicalLoadKg = profile.headKg * (1 + Math.max(0, c2) / 2.5 * 1.5);
            var cervicalMult = (cervicalLoadKg / profile.headKg).toFixed(1);

            var thoracicLoadKg = profile.thoracicKg * (1 + Math.max(0, th3) / 3.0 * 0.8);
            var thoracicMult = (thoracicLoadKg / profile.thoracicKg).toFixed(1);

            var lumbarLoadKg = profile.lumbarKg * (1 + Math.abs(s2) / 3.0 * 0.7);
            var lumbarMult = (lumbarLoadKg / profile.lumbarKg).toFixed(1);

            var overactive = [];
            var inhibited = [];
            if (c2 > 2.0) {
                overactive.push(_0x$d(102), _0x$d(103), _0x$d(104));
                inhibited.push(_0x$d(105));
            }
            if (th3 > 1.5) {
                overactive.push(_0x$d(106), _0x$d(107), _0x$d(108));
                inhibited.push(_0x$d(109), _0x$d(110), _0x$d(111));
            } else if (th3 < -1.5) {
                overactive.push(_0x$d(112));
                inhibited.push(_0x$d(113));
            }
            if (s2 < -2.0) {
                overactive.push(_0x$d(114), _0x$d(115), _0x$d(116));
                inhibited.push(_0x$d(117), _0x$d(118), _0x$d(119));
            } else if (s2 > 2.0) {
                overactive.push(_0x$d(120), _0x$d(121), _0x$d(122));
                inhibited.push(_0x$d(123), _0x$d(124));
            }
            if (overactive.length === 0) overactive.push(_0x$d(125));
            if (inhibited.length === 0) inhibited.push(_0x$d(126));

            gridHtml += _0x$d(127) +
                _0x$d(128) +
                _0x$d(129) +
                _0x$d(130) + (c2 > 0 ? '+' : '') + c2 + _0x$d(131) + (th3 > 0 ? '+' : '') + th3 + _0x$d(132) + (s2 > 0 ? '+' : '') + s2 + _0x$d(133) + (patientAge ? _0x$d(134) + patientAge + _0x$d(135) : '') + _0x$d(52) +
                _0x$d(136) +
                _0x$d(40) +
                _0x$d(137) +
                _0x$d(138) +
                _0x$d(139) +
                _0x$d(140) +
                _0x$d(141) +
                _0x$d(52) +
                _0x$d(142) +
                _0x$d(143) +
                _0x$d(144) +
                _0x$d(145) + cervicalLoadKg.toFixed(1) + _0x$d(146) + cervicalMult + _0x$d(147) +
                _0x$d(148) + thoracicLoadKg.toFixed(1) + _0x$d(146) + thoracicMult + _0x$d(147) +
                _0x$d(149) + lumbarLoadKg.toFixed(1) + _0x$d(146) + lumbarMult + _0x$d(147) +
                _0x$d(40) +
                _0x$d(150) +
                _0x$d(151) +
                _0x$d(152) + overactive.join("、") + _0x$d(40) +
                _0x$d(40) +
                _0x$d(153) +
                _0x$d(154) +
                _0x$d(152) + inhibited.join("、") + _0x$d(40) +
                _0x$d(40) +
                _0x$d(155) +
                _0x$d(156);
        }

        if (state.isSpecialist) {
            gridHtml += _0x$d(157) +
                _0x$d(158) +
                _0x$d(159) +
                _0x$d(160) + state.activeExpertComment + _0x$d(161) +
                _0x$d(162) +
                _0x$d(163) + state.activeExpertExercises + _0x$d(161) +
                _0x$d(164) +
                _0x$d(165);
        }

        var formattedReport = formatMarkdownToHtml(reportMarkdown);

        // 2026-08-26削除: レポート下部の「専門家メンターに個別相談する
        // （有料予約）」ボタン（bookMentorBtn）は、企画者の依頼によりホーム
        // 画面の同機能カード（index.htmlのhomeMentorCard）とあわせて撤去した。
        gridHtml += _0x$d(166) +
            _0x$d(167) + formattedReport + _0x$d(40) +
            _0x$d(40);

        grid.innerHTML = gridHtml;

        // レポート描画後のCanvas描画およびイベント配線
        if (kendallOffsets) {
            var dashCanvas = document.getElementById(_0x$d(168));
            if (dashCanvas) {
                biomechanics.renderMusculoskeletalAvatar(dashCanvas, kendallOffsets.c2Cm, kendallOffsets.th3Cm, kendallOffsets.s2Cm);
            }
            var openSimBtn = document.getElementById(_0x$d(169));
            if (openSimBtn) {
                openSimBtn.onclick = function () {
                    openCounselingModal(kendallOffsets.c2Cm, kendallOffsets.th3Cm, kendallOffsets.s2Cm);
                };
            }
        }
    };
}
