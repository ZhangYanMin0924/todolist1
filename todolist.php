<?php

$study = [
    [
        'title' => '学习',
        'ctime' => '2019/6/17'
    ],
    [
        'title' => '毕业论文',
        'ctime' => '2019/6/17'
    ]
];
$ty = [
    [
        'title' => '体育',
        'ctime' => '2019/6/17'
    ],
    [
        'title' => '毕业论文',
        'ctime' => '2019/6/17'
    ]
];
$yl = [
    [
        'title' => '娱乐',
        'ctime' => '2019/6/17'
    ],
    [
        'title' => '毕业论文',
        'ctime' => '2019/6/17'
    ]
];
$type = $_GET['type'];
switch ($type){
    case 'study':
        echo json_encode($study);
        break;
    case 'ty':
        echo json_encode($ty);
        break;
    case 'yl':
        echo json_encode($yl);
        break;

}

