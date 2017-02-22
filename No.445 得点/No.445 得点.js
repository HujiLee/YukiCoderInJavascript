var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    input += chunk;
});
process.stdin.on('end', function () {
    input = input.split('\n');
    main();
});


function main() {
    var first_line=input[0].split(" ").map(function (x) {
        return x-0;
    });
    console.log(
        50*first_line[0]+Math.floor((50*first_line[0]/(8+2*first_line[1])*10))
    );
}

/**
 * Created by Administrator on 2016/11/25 0025.
 */

/**
 入力	結果	実行時間
 使用メモリ
 00_example_01.txt	AC	74 ms
 17272 KB
 00_example_02.txt	AC	76 ms
 17272 KB
 00_example_03.txt	AC	76 ms
 17276 KB
 10_rand1.txt	AC	78 ms
 17272 KB
 10_rand2.txt	AC	77 ms
 17272 KB
 10_rand3.txt	AC	74 ms
 17276 KB
 10_rand4.txt	AC	78 ms
 17276 KB
 10_rand5.txt	AC	74 ms
 17272 KB
 20_hand_01.txt	AC	73 ms
 17280 KB
 20_hand_02.txt	AC	88 ms
 17272 KB
 30_rand1.txt	AC	78 ms
 17268 KB
 30_rand2.txt	AC	73 ms
 17268 KB
 30_rand3.txt	AC	74 ms
 17272 KB
 30_rand4.txt	AC	79 ms
 17272 KB
 30_rand5.txt	AC	85 ms
 17276 KB
 challenge01.txt	AC	89 ms
 17272 KB
 */