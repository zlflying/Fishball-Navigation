/** 菜单节点 */
export interface MenuNode {
    /** 节点ID */
    nodeId: string;
    /** 节点名称 */
    displayName: string;
    /** 节点类型 */
    nodeType: "MENU" | "ITEM",
    /** 节点图标 */
    iconPath: string | null;
    /** 节点子节点 */
    children: MenuNode[];
    /** 菜单项 */
    items: MenuItem[]
}

/** 菜单项 */
export interface MenuItem {
    /** 菜单项ID */
    itemId: string;
    /** 菜单项名称 */
    displayName: string;
    /** 菜单项描述 */
    description: string;
    /** 菜单项图标 */
    logoPath: string;
    /** 网站地址 */
    websiteUrl: string;
    /** 跳转方式 */
    redirectType: "DETAIL" | "DETAIL_HOT"
}

/** 通用科学节点列表 */
export const commonMenuNodes: MenuNode[] = [
    {
        nodeId: "1e3f7e1d-3c37-11f0-ba03-bc24117649c5",
        displayName: "鱼丸推荐",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [],
        items: [
            {
                itemId: "f86eec59-685e-4840-a22f-7fa0b3191391",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            },
            {
                itemId: "63939833-32e0-489a-811a-cf10791346a5",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: "./img/menu/7ed71df8fa864f9e85948a10dbe35045.维普中文期刊.png",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "ae45741a-a0fa-4932-9372-bbdb61750513",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: "./img/menu/7ab6f284282447c7885bfe2ba9a0f4db.国家科技图书文献中心（NSTL）.png",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "d23b1130-4883-435a-91fd-163c675089d4",
                displayName: "Web of Science",
                description: "获取自然科学领域最权威、最前沿的科研信息",
                logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                websiteUrl: "https://www.webofscience.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "076c4c13-a5d5-488e-9f9d-4f0586049006",
                displayName: "NoteExpress",
                description: "论文写作时的参考文献管理",
                logoPath: "./img/menu/bd6a2903f34f4fec89cd42c64a8b6bdc.noteexpress.png",
                websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "2941135d-4e52-4408-8293-fd1060f8f3a9",
                displayName: "学信网查重",
                description: "权威，本科 / 硕博适用",
                logoPath: "./img/menu/d2304d74ada14e988f3713aeb59ffb4c.学信网查重.png",
                websiteUrl: "https://chsi.wanfangtech.net",
                redirectType: "DETAIL"
            },
            {
                itemId: "7135ffe4-3be2-4d67-8251-f8af0b773ed5",
                displayName: "ScienceDirect",
                description: "是全球最大的科学、技术与医学全文电子资源数据库",
                logoPath: "./img/menu/52da7c106a8a457e83d1e6d4098c5c0c.sciencedirect.png",
                websiteUrl: "https://www.sciencedirect.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "b6217b2c-edaa-4678-8e86-00ba7dd547f3",
                displayName: "arXiv",
                description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
                logoPath: "./img/menu/8ce573302fce48c59f115db0d64e522c.arxiv.png",
                websiteUrl: "http://arxiv.org/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "126d7780-3c77-11f0-9b5b-bc24117649c5",
        displayName: "中文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple",
        children: [
            {
                nodeId: "ca4937d2-57d9-4a06-a778-ba1c33098587",
                displayName: "自然科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e6ffeebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "41d38591-3d20-11f0-9b5b-bc24117649c5",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "./img/menu/7ab6f284282447c7885bfe2ba9a0f4db.国家科技图书文献中心（NSTL）.png",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8143e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "./img/menu/7ed71df8fa864f9e85948a10dbe35045.维普中文期刊.png",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "524c18b0-e19e-42e5-a59a-caca6fde3dcd",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "./img/menu/7ab6f284282447c7885bfe2ba9a0f4db.国家科技图书文献中心（NSTL）.png",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7ae3d556-5159-4944-b9bb-ff0c6a279b2f",
                        displayName: "中国科学引文数据库（CSCD）",
                        description: "我国第一个引文数据库",
                        logoPath: "./img/menu/中国科学引文数据库（CSCD）.png",
                        websiteUrl: "http://sciencechina.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4a914924-d878-4936-a5cb-7cc7e43a70ac",
                        displayName: "中国生物医学文献服务系统",
                        description: "生物医学中外文整合检索平台",
                        logoPath: "./img/menu/中国生物医学文献服务系统.png",
                        websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45e9a6db-efa1-4fc7-861a-a8dae487cc75",
                        displayName: "国家自然科学基金知识库",
                        description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
                        logoPath: "./img/menu/国家自然科学基金知识库.png",
                        websiteUrl: "https://kd.nsfc.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b2156a81-be3f-4ec1-81c1-7df1d58865e4",
                        displayName: "超星期刊",
                        description: "全终端智能化学术期刊库",
                        logoPath: "./img/menu/超星期刊.png",
                        websiteUrl: "https://www.chaoxing.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c47ed9ae-ec95-4290-86bf-0aa308942742",
                        displayName: "中华医学期刊",
                        description: "中华医学会权威综合性医学期刊",
                        logoPath: "./img/menu/中华医学期刊网.png",
                        websiteUrl: "https://www.yiigle.com/index",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e429664d-4bde-47a9-a294-76d3834c09dc",
                        displayName: "中国国家数字图书馆",
                        description: "国家级数字阅读资源中心",
                        logoPath: "./img/menu/中国国家数字图书馆.png",
                        websiteUrl: "https://www.nlc.cn/web/index.shtml",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b198590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "./img/menu/万方.png",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "96b2b199-aae4-4b5c-97a4-e7323f2cd5c6",
                displayName: "交叉学科",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e69feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8343e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "./img/menu/7ed71df8fa864f9e85948a10dbe35045.维普中文期刊.png",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7ae4d556-5159-4944-b9bb-ff0c6a279b2f",
                        displayName: "中国科学引文数据库（CSCD）",
                        description: "我国第一个引文数据库",
                        logoPath: "./img/menu/中国科学引文数据库（CSCD）.png",
                        websiteUrl: "http://sciencechina.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d28a69c8-e5df-47d7-bdd6-89aa4e1539f9",
                        displayName: "寻知学术文献数据检索平台",
                        description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
                        logoPath: "./img/menu/寻知学术文献数据检索平台.png",
                        websiteUrl: "https://xunzhi.kingbooks.com.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b598590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "./img/menu/万方.png",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "86aa9faf-4500-498e-afa1-edea58a9a873",
                displayName: "人文科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e68feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "46d894d5-369b-4db6-82f3-006d340828c7",
                        displayName: "中文社会科学引文索引（CSSCI）",
                        description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                        logoPath: "./img/menu/中文社会科学引文索引.png",
                        websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "66be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
                        displayName: "读秀学术搜索",
                        description: "海量全文数据及元数据组成的超大型数据库",
                        logoPath: "./img/menu/读秀学术搜索.png",
                        websiteUrl: "https://www.duxiu.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b498590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "./img/menu/万方.png",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "5a18568d-75b1-45dc-a8fe-4cef1617b102",
                displayName: "社会科学",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e67feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45d894d5-369b-4db6-82f3-006d340828c7",
                        displayName: "中文社会科学引文索引（CSSCI）",
                        description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                        logoPath: "./img/menu/中文社会科学引文索引.png",
                        websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
                        displayName: "国家哲学社会科学文献中心 (NSSD)",
                        description: "免费开放，覆盖哲学、经济学、法学等8大学科",
                        logoPath: "./img/menu/国家哲学社会科学文献中心.png",
                        websiteUrl: "https://www.ncpssd.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8f735e4d-a09a-4008-9cb4-ca0f734c0850",
                        displayName: "人大复印报刊资料",
                        description: "国内公开出版的人文社会科学领域的重要报刊文章",
                        logoPath: "./img/menu/人大复印报刊资料.png",
                        websiteUrl: "http://www.rdfybk.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e520ca0b-406e-46f7-a932-968013909b11",
                        displayName: "中国心理科学信息中心",
                        description: "中国心理学研究成果专著",
                        logoPath: "./img/menu/中华心理科学信息中心.png",
                        websiteUrl: "https://lib.psych.ac.cn/library/home/index",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b398590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "./img/menu/万方.png",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "3168f446-587b-4f0a-a14a-956b6e3ed831",
                displayName: "工程技术",
                nodeType: "MENU",
                iconPath: null,
                children: [],
                items: [
                    {
                        itemId: "e66feebd-3c3c-11f0-ba03-bc24117649c5",
                        displayName: "中国知网（CNKI）",
                        description: "中国最大的学术论文数据库",
                        logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                        websiteUrl: "https://www.cnki.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8243e503-8077-42dd-8ebe-71b1bc9cf41b",
                        displayName: "维普中文期刊",
                        description: "工程技术文献占优、支持同义词扩展检索",
                        logoPath: "./img/menu/7ed71df8fa864f9e85948a10dbe35045.维普中文期刊.png",
                        websiteUrl: "https://qikan.cqvip.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "534c18b0-e19e-42e5-a59a-caca6fde3dcd",
                        displayName: "国家科技图书文献中心（NSTL）",
                        description: "集成中科院、工程院等资源",
                        logoPath: "./img/menu/7ab6f284282447c7885bfe2ba9a0f4db.国家科技图书文献中心（NSTL）.png",
                        websiteUrl: "https://www.nstl.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b298590c-67e4-45f6-8298-f7ff72b95b9d",
                        displayName: "万方数据库",
                        description: "综合性强、数据更新快",
                        logoPath: "./img/menu/万方.png",
                        websiteUrl: "https://www.wanfangdata.com.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d43b9d17-086c-4652-bea1-bbf12aafb4f1",
                        displayName: "Semantic Scholar",
                        description: "覆盖AI/系统领域研究趋势分析、关联文献挖掘",
                        logoPath: "./img/menu/f877bd04c78145b38277b5d8cef22447.Semantic Scholar.png",
                        websiteUrl: "https://www.semanticscholar.org",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: [
            {
                itemId: "ba98590c-67e4-45f6-8298-f7ff72b95b9d",
                displayName: "万方数据库",
                description: "综合性强、数据更新快",
                logoPath: "./img/menu/万方.png",
                websiteUrl: "https://www.wanfangdata.com.cn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "8043e503-8077-42dd-8ebe-71b1bc9cf41b",
                displayName: "维普中文期刊",
                description: "工程技术文献占优、支持同义词扩展检索",
                logoPath: "./img/menu/7ed71df8fa864f9e85948a10dbe35045.维普中文期刊.png",
                websiteUrl: "https://qikan.cqvip.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "514c18b0-e19e-42e5-a59a-caca6fde3dcd",
                displayName: "国家科技图书文献中心（NSTL）",
                description: "集成中科院、工程院等资源",
                logoPath: "./img/menu/7ab6f284282447c7885bfe2ba9a0f4db.国家科技图书文献中心（NSTL）.png",
                websiteUrl: "https://www.nstl.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "d4b344d0-34da-434a-93e3-6899cdc5deb7",
                displayName: "中国知网（CNKI）",
                description: "中国最大的学术论文数据库",
                logoPath: "./img/menu/4e742eed5e754c85bc8ba1e8194f4727.中国知网（CNKI）.png",
                websiteUrl: "https://www.cnki.net/",
                redirectType: "DETAIL"
            },
            {
                itemId: "44e9a6db-efa1-4fc7-861a-a8dae487cc75",
                displayName: "国家自然科学基金知识库",
                description: "获取中文前沿研究数据（材料/环境科学/化学为主）",
                logoPath: "./img/menu/国家自然科学基金知识库.png",
                websiteUrl: "https://kd.nsfc.cn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "7ae2d556-5159-4944-b9bb-ff0c6a279b2f",
                displayName: "中国科学引文数据库（CSCD）",
                description: "我国第一个引文数据库",
                logoPath: "./img/menu/中国科学引文数据库（CSCD）.png",
                websiteUrl: "http://sciencechina.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "3a914924-d878-4936-a5cb-7cc7e43a70ac",
                displayName: "中国生物医学文献服务系统",
                description: "生物医学中外文整合检索平台",
                logoPath: "./img/menu/中国生物医学文献服务系统.png",
                websiteUrl: "https://www.sinomed.ac.cn/index.jsp",
                redirectType: "DETAIL"
            },
            {
                itemId: "b2056a81-be3f-4ec1-81c1-7df1d58865e4",
                displayName: "超星期刊",
                description: "全终端智能化学术期刊库",
                logoPath: "./img/menu/超星期刊.png",
                websiteUrl: "https://www.chaoxing.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "c37ed9ae-ec95-4290-86bf-0aa308942742",
                displayName: "中华医学期刊",
                description: "中华医学会权威综合性医学期刊",
                logoPath: "./img/menu/中华医学期刊网.png",
                websiteUrl: "https://www.yiigle.com/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "e419664d-4bde-47a9-a294-76d3834c09dc",
                displayName: "中国国家数字图书馆",
                description: "国家级数字阅读资源中心",
                logoPath: "./img/menu/中国国家数字图书馆.png",
                websiteUrl: "https://www.nlc.cn/web/index.shtml",
                redirectType: "DETAIL"
            },
            {
                itemId: "e510ca0b-406e-46f7-a932-968013909b11",
                displayName: "中国心理科学信息中心",
                description: "中国心理学研究成果专著",
                logoPath: "./img/menu/中华心理科学信息中心.png",
                websiteUrl: "https://lib.psych.ac.cn/library/home/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "44d894d5-369b-4db6-82f3-006d340828c7",
                displayName: "中文社会科学引文索引（CSSCI）",
                description: "检索中文人文社会科学领域论文收录和被引用情况的引文数据库",
                logoPath: "./img/menu/中文社会科学引文索引.png",
                websiteUrl: "http://cssci.nju.edu.cn/login_u.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "8f725e4d-a09a-4008-9cb4-ca0f734c0850",
                displayName: "人大复印报刊资料",
                description: "国内公开出版的人文社会科学领域的重要报刊文章",
                logoPath: "./img/menu/人大复印报刊资料.png",
                websiteUrl: "http://www.rdfybk.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "1bf93263-690e-495c-9a0f-a5dd6fbb5cd9",
                displayName: "国家哲学社会科学文献中心 (NSSD)",
                description: "免费开放，覆盖哲学、经济学、法学等8大学科",
                logoPath: "./img/menu/国家哲学社会科学文献中心.png",
                websiteUrl: "https://www.ncpssd.org",
                redirectType: "DETAIL"
            },
            {
                itemId: "65be8e23-3d9a-4c56-a0dc-ef9de43a41ae",
                displayName: "读秀学术搜索",
                description: "海量全文数据及元数据组成的超大型数据库",
                logoPath: "./img/menu/读秀学术搜索.png",
                websiteUrl: "https://www.duxiu.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "d27a69c8-e5df-47d7-bdd6-89aa4e1539f9",
                displayName: "寻知学术文献数据检索平台",
                description: "方便、快捷地发现所需的交叉学科知识和文献情报信息",
                logoPath: "./img/menu/寻知学术文献数据检索平台.png",
                websiteUrl: "https://xunzhi.kingbooks.com.cn/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1300200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "英文文献",
        nodeType: "MENU",
        iconPath: "line-md:text-box-multiple-twotone",
        children: [
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310884",
                displayName: "交叉学科",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "58eb1c54-fbb4-445f-9917-e1c83d9519ff",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6d4035e8-3913-4893-ba25-ee143658c767",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "./img/menu/bbef0bbd2e16423f82abb0b38c92756d.scopus.png",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "da020e45-377f-4a71-ad38-2568b372e89a",
                        displayName: "ScienceDirect",
                        description: "是全球最大的科学、技术与医学全文电子资源数据库",
                        logoPath: "./img/menu/52da7c106a8a457e83d1e6d4098c5c0c.sciencedirect.png",
                        websiteUrl: "https://www.sciencedirect.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bee96b6a-7b06-4c98-9bd8-67a939977384",
                        displayName: "ProQuest",
                        description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                        logoPath: "./img/menu/e6729a29b3214c36980503772bb49557.proquest.png",
                        websiteUrl: "https://about.proquest.com/zh/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2211871e-08ab-4aa2-9ab3-3024b1bcdfec",
                        displayName: "BASE",
                        description: "提供对全球异构学术资源的集成检索服务",
                        logoPath: "./img/menu/BASE.png",
                        websiteUrl: "http://www.base-search.net/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c06c19c2-e407-4b27-91ae-3f90e3462dfc",
                        displayName: "Sage Research Methods",
                        description: "适合跨学科方法设计 | 方法学整合",
                        logoPath: "./img/menu/Sage Research Methods.png",
                        websiteUrl: "https://methods.sagepub.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e8250d46-41da-48cd-a505-248d278c3304",
                        displayName: "EBSCO",
                        description: "多学科学术数据库",
                        logoPath: "./img/menu/EBSCO.png",
                        websiteUrl: "http://search.ebscohost.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310883",
                displayName: "人文科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "72ac02f4-ae58-4ac7-a133-95cd603c835d",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "68205fe9-f4f3-49f1-82a1-944e8754a4c4",
                        displayName: "Project MUSE",
                        description: "人文科学研究的重要资源之一",
                        logoPath: "./img/menu/Project MUSE.png",
                        websiteUrl: "https://about.muse.jhu.edu/librarians/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e42589c5-310a-43b1-bc5a-93bfea9d29c3",
                        displayName: "JSTOR",
                        description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                        logoPath: "./img/menu/JSTOR.png",
                        websiteUrl: "https://www.jstor.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2f7d1b4e-e618-4757-bad5-f66b2e7e18c4",
                        displayName: "HeinOnline",
                        description: "全球最大法律文献库",
                        logoPath: "./img/menu/HeinOnline.png",
                        websiteUrl: "https://home.heinonline.org/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310882",
                displayName: "社会科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "28fba66a-b3d0-433d-8faa-a0754bba7cbd",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "44534b02-567c-4595-bdd9-17287517dbe2",
                        displayName: "JSTOR",
                        description: "涵盖人文、社会科学和自然科学领域的期刊文献",
                        logoPath: "./img/menu/JSTOR.png",
                        websiteUrl: "https://www.jstor.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "df1cf674-ea55-4d1a-9398-c6751f62f9e2",
                        displayName: "ProQuest",
                        description: "收录欧美多国大学的硕博士论文，支持跨学科检索",
                        logoPath: "./img/menu/e6729a29b3214c36980503772bb49557.proquest.png",
                        websiteUrl: "https://about.proquest.com/zh/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "93be835c-2ec8-4e9c-83d4-de7ccd924552",
                        displayName: "Wiley Online Library",
                        description: "全球领先的学协会出版商",
                        logoPath: "./img/menu/Wiley Online Library.png",
                        websiteUrl: "https://onlinelibrary.wiley.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2626f2b2-245f-46c7-b104-9b2af5d63c42",
                        displayName: "Cambridge Journals Online",
                        description: "剑桥大学出版社的期刊在线平台",
                        logoPath: "./img/menu/Cambridge Journals Online.png",
                        websiteUrl: "https://www.cambridge.org/core",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ec02b02a-927f-4d41-bb89-e6f4de0681d3",
                        displayName: "SSRN",
                        description: "济学、法学预印本平台，可免费下载工作论文",
                        logoPath: "./img/menu/ssrn.png",
                        websiteUrl: "https://www.ssrn.com/index.cfm/en/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d310881",
                displayName: "工程技术",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "c3ded221-b663-44fd-9836-032cb7d7cf15",
                        displayName: "IEEE Xplore",
                        description: "电气电子工程、计算机科学等领域的权威文献数据库",
                        logoPath: "./img/menu/IEEE Xplore.png",
                        websiteUrl: "https://developer.ieee.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "256988a7-523b-4972-b7e5-f5f801975524",
                        displayName: "ScienceDirect",
                        description: "是全球最大的科学、技术与医学全文电子资源数据库",
                        logoPath: "./img/menu/52da7c106a8a457e83d1e6d4098c5c0c.sciencedirect.png",
                        websiteUrl: "https://www.sciencedirect.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "07154ed7-0010-4901-887e-29cc8ffde4b4",
                        displayName: "ASME Digital Library",
                        description: "美国机械工程师学会资源",
                        logoPath: "./img/menu/ASME Digital Library.png",
                        websiteUrl: "https://asmedigitalcollection.asme.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9dedd8b8-82e3-45f2-be2c-f057e0cf4a9c",
                        displayName: "Materials Science & Engineering Database",
                        description: "专注材料性能与工艺",
                        logoPath: "./img/menu/Materials Science & Engineering Database.png",
                        websiteUrl: "https://mse.engineering.cmu.edu",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "32d902a8-be7b-42fa-8470-c9df31bac9bb",
                        displayName: "ACM Digital Library",
                        description: "计算机协会资源，算法/AI领域权威",
                        logoPath: "./img/menu/ACM Digital Library.png",
                        websiteUrl: "https://www.acm.org/publications/digital-library",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6656b931-2cd1-494b-b386-7833cab0df9b",
                        displayName: "DOAJ",
                        description: "开源期刊库，含工程技术类OA期刊",
                        logoPath: "./img/menu/DOAJ.png",
                        websiteUrl: "https://doaj.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4699cd20-7a40-4247-a924-ccd5492892aa",
                        displayName: "Engineering Village",
                        description: "工程技术领域的综合性检索工具",
                        logoPath: "./img/menu/Engineering Village.png",
                        websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "50a991d4-8372-43b6-906f-dc9b7f9c4c7f",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "fbbe6f07-edd7-4e05-bbce-d7a9e8b0189f",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "./img/menu/bbef0bbd2e16423f82abb0b38c92756d.scopus.png",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "00bed980-cb03-403c-97d8-7d6f68941f2c",
                        displayName: "SpringerLink",
                        description: "综合性的在线学术资源平台",
                        logoPath: "./img/menu/SpringerLink.png",
                        websiteUrl: "https://link.springer.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f8b05aaa-6ab6-4b05-b8de-e8e759074312",
                        displayName: "ASME Digital Library",
                        description: "美国机械工程师学会资源",
                        logoPath: "./img/menu/ASME Digital Library.png",
                        websiteUrl: "https://asmedigitalcollection.asme.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "31ff858d-ce30-4453-8c72-77def690961f",
                        displayName: "ASCE Library",
                        description: "美国土木工程师学会全文库",
                        logoPath: "./img/menu/ASCE Library.png",
                        websiteUrl: "https://ascelibrary.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "3e87a6b1-f926-4fd3-b069-8650ec52d2ed",
                        displayName: "DBLP",
                        description: "计算机科学书目数据库",
                        logoPath: "./img/menu/dblp.png",
                        websiteUrl: "https://dblp.uni-trier.de",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "94a43c1c-e088-4ac4-a03c-bc7e1e48839e",
                        displayName: "CiteseerX",
                        description: "理论计算机科学、早期文献获取",
                        logoPath: "./img/menu/citeseer.png",
                        websiteUrl: "https://citeseerx.ist.psu.edu",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "56bc7bdd-a3bf-4a99-ab7c-2b47e737b059",
                        displayName: "SciFinder",
                        description: "全球最全化学物质/反应数据库",
                        logoPath: "./img/menu/SciFinder.png",
                        websiteUrl: "https://sso.cas.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f6ea7c66-b0bf-417c-88cb-c0c1827fa6d6",
                        displayName: "Materials Project Documentation",
                        description: "免费计算材料数据库",
                        logoPath: "./img/menu/Materials Project Documentation.png",
                        websiteUrl: "https://next-gen.materialsproject.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c409d406-8d7a-4961-b523-2a59c5b67cfe",
                        displayName: "ICE Virtual Library",
                        description: "英国土木工程师学会期刊",
                        logoPath: "./img/menu/ICE Virtual Library.png",
                        websiteUrl: "https://www.icevirtuallibrary.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cbe8a570-19c5-469d-94d7-07637d31088e",
                displayName: "自然科学",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/42627c8912b245e0864e053f27560d51.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u62oUrn39PJmyc8wjN18wmIK5Gs%3D",
                children: [],
                items: [
                    {
                        itemId: "bdf7aabd-d0f0-4d08-a3a9-0bbbb0b4dcab",
                        displayName: "Web of Science",
                        description: "获取自然科学领域最权威、最前沿的科研信息",
                        logoPath: "./img/menu/c31bd0f824224d18b8d080be9b68bc9c.Web of Science.png",
                        websiteUrl: "https://www.webofscience.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b9350461-d33a-4a7b-a019-288763956c51",
                        displayName: "Engineering Village",
                        description: "工程技术领域的综合性检索工具",
                        logoPath: "./img/menu/Engineering Village.png",
                        websiteUrl: "https://www.elsevier.cn/products/engineering-village/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "934f215b-327b-4035-98d7-44a67e2f707a",
                        displayName: "PubMed",
                        description: "医学、生物学等相关领域研究人员获取文献的重要途径",
                        logoPath: "./img/menu/PubMed.png",
                        websiteUrl: "https://pubmed.ncbi.nlm.nih.gov/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "a0d8a6d8-c8da-471a-8573-cdadbc8e2870",
                        displayName: "arXiv",
                        description: "全球最大的预印本平台之一，及时了解这些领域的最新研究动态和成果",
                        logoPath: "./img/menu/8ce573302fce48c59f115db0d64e522c.arxiv.png",
                        websiteUrl: "http://arxiv.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "15595288-776b-494b-8c2a-5110e9998bfa",
                        displayName: "PubMed Central (PMC)",
                        description: "全球免费使用的生命科学期刊原始研究论文全文库",
                        logoPath: "./img/menu/PubMed Central (PMC).png",
                        websiteUrl: "https://pmc.ncbi.nlm.nih.gov/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4385a3f7-36c7-4fd7-ae74-680ea1270350",
                        displayName: "Elsevier",
                        description: "文献信息检索系统",
                        logoPath: "./img/menu/52da7c106a8a457e83d1e6d4098c5c0c.sciencedirect.png",
                        websiteUrl: "https://www.sciencedirect.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8fa0910d-8b10-4966-9356-9bac93a3964c",
                        displayName: "Scopus",
                        description: "全球最大的同行评议学术论文摘要和引文数据库",
                        logoPath: "./img/menu/bbef0bbd2e16423f82abb0b38c92756d.scopus.png",
                        websiteUrl: "https://www.scopus.com/home.uri",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "205279b8-f87b-491b-95c7-dfdde1631d5a",
                        displayName: "SpringerLink",
                        description: "综合性的在线学术资源平台",
                        logoPath: "./img/menu/SpringerLink.png",
                        websiteUrl: "https://link.springer.com",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "12741430-3c77-11f0-9b5b-bc24117649c5",
        displayName: "专利检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "446304ed-2d47-4ac3-b7fc-1d714f5e1d79",
                displayName: "外国专利",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/64190ff59cbe48a39082f367612529c2.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=y28RICWAfN41DOy4%2BXqbOQKD8RA%3D",
                children: [],
                items: [
                    {
                        itemId: "f901ac8c-e139-405e-b8e3-8d7d5451010c",
                        displayName: "Patentscope（WIPO）",
                        description: "世界知识产权组织的数据库",
                        logoPath: "./img/menu/Patentscope（WIPO）.png",
                        websiteUrl: "https://patentscope.wipo.int",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7adf9257-354e-4042-aa15-1d6cca529b6f",
                        displayName: "Espacenet",
                        description: "欧洲专利局数据库",
                        logoPath: "./img/menu/Espacenet.png",
                        websiteUrl: "https://worldwide.espacenet.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "38587e4d-0188-44d4-95bf-92af816d4172",
                        displayName: "Google Patents",
                        description: "覆盖美、欧、WIPO 等的授权专利与公开申请",
                        logoPath: "./img/menu/google patent.png",
                        websiteUrl: "https://www.google.com/patents",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d0a5fdc6-58e7-4c22-9779-eb529dd2a354",
                        displayName: "USPTO",
                        description: "查美国专利，含全文、申请库及分类数据库",
                        logoPath: "./img/menu/uspto.png",
                        websiteUrl: "https://www.uspto.gov/patents",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2bcb0814-6cbe-414e-a103-5c12adf7b664",
                        displayName: "incoPat",
                        description: "支持多语言、多维度检索分析",
                        logoPath: "./img/menu/incoPat.png",
                        websiteUrl: "http://www.incopat.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "7dffc03b-8817-4b74-ad99-648e1d05a0f5",
                displayName: "中国专利",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a212e4478b84498c954313b26af6c3d4.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=1aLLRjb8k3P053sGHEedOTcgXqQ%3D",
                children: [],
                items: [
                    {
                        itemId: "674a2c3b-7d0d-486b-8a3a-734049c1e984",
                        displayName: "中国专利公布公告",
                        description: "含 1985 年起中国全部专利信息",
                        logoPath: "./img/menu/中国专利公布公告.png",
                        websiteUrl: "http://epub.cnipa.gov.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7e76e71a-d838-41ec-82fe-fb3b3ff3b03e",
                        displayName: "国知局专利检索及分析",
                        description: "收录多国专利数据，有分析、生成报告功能",
                        logoPath: "./img/menu/国知局专利检索及分析.png",
                        websiteUrl: "https://pss-system.cponline.cnipa.gov.cn/conventionalSearch",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c2ffa64d-6511-4ec9-b355-62404f2c10b7",
                        displayName: "专利信息服务平台",
                        description: "中国专利专业检索，可监控专利变化",
                        logoPath: "./img/menu/专利信息服务平台.png",
                        websiteUrl: "http://search.cnipr.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f85aecf8-6adb-413e-b880-53bfb52a0dfa",
                        displayName: "专利之星",
                        description: "含全球超 1 亿件专利数据",
                        logoPath: "./img/menu/专利之星.png",
                        websiteUrl: "https://www.patentstar.com.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "93e94755-6529-4c8d-abaf-aa892e4424db",
                        displayName: "中国知网专利检索",
                        description: "集成关联文献、成果等，展现专利背景动态",
                        logoPath: "./img/menu/中国知网专利检索.png",
                        websiteUrl: "https://aipat.cnki.net",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c5",
        displayName: "期刊推荐",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "44c996e0-eb0c-4773-a58d-290eff7befcf",
                displayName: "国际核心",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d6ee1e56864849f099e8d29a130ed172.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2Fn92Py0FTP0Et7fWL5lktFi7PXI%3D",
                children: [],
                items: [
                    {
                        itemId: "1353e367-b91b-4db2-8b94-ffd4a2c50657",
                        displayName: "SCI《科学引文索引》/Science Citation Index",
                        description: "一个多学科的综合性大型引文数据库",
                        logoPath: "./img/menu/SCI《科学引文索引》.png",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "980e2684-58d6-438d-9440-1de1f43f5255",
                        displayName: "EI《工程索引》/The Engineering Index",
                        description: "期刊包括全部工程学科和工程活动领域的研究成果",
                        logoPath: "./img/menu/EI《工程索引》.png",
                        websiteUrl: "https://www.engineeringvillage.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bf13bee0-1f5c-40c8-8308-b046068a1672",
                        displayName: "SSCI《社会科学引文索引》/Social Sciences Citation Index",
                        description: "社会科学领域重要的引文索引数据库，也是 SCI 的姊妹索引",
                        logoPath: "./img/menu/SSCI《社会科学引文索引》.png",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "89d98a7d-3c95-4a64-920f-188d182359f6",
                        displayName: "ISTP《科技会议录索引》/Index to Scientific & Technical Proceedings",
                        description: "检索全世界正式出版的会议文献的主要和权威工具",
                        logoPath: "./img/menu/ISTP《科技会议录索引》.png",
                        websiteUrl: "https://clarivate.com/webofsciencegroup/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "c627b1e0-2510-4339-beb8-dab325ea7990",
                displayName: "国内核心",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/1b7fec58de3b44228c8180b9c6e23f6e.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fXQL1WMJM%2Fy0TGZTh0xL%2B65U%2Bnw%3D",
                children: [],
                items: [
                    {
                        itemId: "f027c398-e9ea-421d-b203-c9f107efbeab",
                        displayName: "《中文核心期刊要目总览》",
                        description: "北京大学图书馆",
                        logoPath: "./img/menu/《中文核心期刊要目总览》.png",
                        websiteUrl: "http://hxqk.lib.pku.edu.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "82f09f90-6f0f-4bd3-a5c0-e50c4128a7ac",
                        displayName: "中文社会科学索引（CSSCI）来源期刊",
                        description: "南京大学",
                        logoPath: "./img/menu/中文社会科学英文索引（CSSCI）来源期刊.png",
                        websiteUrl: "https://cssrac.nju.edu.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "639e3952-1f1b-47ca-9b3e-2c969d916200",
                        displayName: "中国科技论文统计源期刊/中国科技核心期刊",
                        description: "中国科学技术信息研究所",
                        logoPath: "./img/menu/中国科技论文统计源期刊_中国科技核心期刊.png",
                        websiteUrl: "http://www.istic.ac.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "3f83b173-87fc-4355-b227-f7b2023e1e8c",
                        displayName: "中国人文社会科学核心期刊",
                        description: "中国社会科学院文献信息中心",
                        logoPath: "./img/menu/中国人文社会科学核心期刊.png",
                        websiteUrl: "http://www.lib.cass.org.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "5b213e6c-9706-4458-9997-4226d8e0d319",
                        displayName: "中国科学引文数据库(CSCD)来源期刊",
                        description: "中国科学院文献情报中心",
                        logoPath: "./img/menu/中国科学引文数据库(CSCD)来源期刊.png",
                        websiteUrl: "http://sciencechina.cn/cscd_source.jsp",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6e1a6794-c779-42f9-bdeb-cf8ecc2ded75",
                        displayName: "中国核心期刊遴选数据库",
                        description: "万方数据股份有限公司",
                        logoPath: "./img/menu/中国核心期刊遴选数据库.png",
                        websiteUrl: "https://c.wanfangdata.com.cn/periodical",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "127a2288-3c77-11f0-9b5b-bc24117649c6",
        displayName: "期刊检索",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "15a2b456-90e5-40ed-8c6f-91a1fb74458d",
                displayName: "中国学术期刊",
                description: "知网期刊检索入口",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%9C%AF%E6%9C%9F%E5%88%8A.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=PU2Ass2fzooGLSHEjgeeX94sOZQ%3D",
                websiteUrl: "https://cajn.cnki.net/cajn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "6240dab8-2260-44e5-b521-cf8124cba9f1",
                displayName: "Elsevier",
                description: "文献/期刊信息检索系统",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Elsevier.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=htx7t41BhBLBNebNNSp1i64fKjo%3D",
                websiteUrl: "https://www.sciencedirect.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "1fd3139e-cbb0-4c96-8823-43860954e384",
                displayName: "核心期刊查询",
                description: "期刊核心资质检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E6%A0%B8%E5%BF%83%E6%9C%9F%E5%88%8A%E6%9F%A5%E8%AF%A2.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YQZfOdvPbVM6qxKXmmhWvxr57C8%3D",
                websiteUrl: "http://corejournal.lib.sjtu.edu.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "9a59911c-ba0c-4200-b93a-82beaf8c3a74",
                displayName: "MedSci",
                description: "医学科研服务平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/MedSci.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rovA5CPioQl947hqYTGAdjp5ax4%3D",
                websiteUrl: "https://www.medsci.cn/sci/index.do",
                redirectType: "DETAIL"
            },
            {
                itemId: "a6ac8c9a-8ebc-48bf-9aa8-ed3474e44b11",
                displayName: "北大期刊网",
                description: "中文核心期刊查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%8C%97%E5%A4%A7%E6%9C%9F%E5%88%8A%E7%BD%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FDusGCYqck5cfrWxOvlmRjrlLSo%3D",
                websiteUrl: "https://ccj.pku.edu.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1220200a-3c77-11f0-9b5b-bc24117649c4",
        displayName: "写作翻译",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "e23c0fe2-ec4d-43c7-8806-995fe038e9eb",
                displayName: "知网翻译",
                description: "提供规范的学术表达",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E7%BD%91%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gZgOCjC7hjDbxoiYOgL2Ofq16x8%3D",
                websiteUrl: "https://dict.cnki.net/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "873ff787-1988-45a7-9ce3-f366024ef856",
                displayName: "有道翻译",
                description: "多场景智能翻译平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yLNvLD94YZWQVBLTvMbra3ieqBQ%3D",
                websiteUrl: "https://fanyi.youdao.com/#/AITranslate",
                redirectType: "DETAIL"
            },
            {
                itemId: "9c076aab-9a6a-487f-a42f-0821337e59d4",
                displayName: "百度翻译",
                description: "免费在线翻译工具",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qO1KAeT0XpqHLkM1%2FPKMKJa5zdw%3D",
                websiteUrl: "https://fanyi.baidu.com/mtpe-individual/multimodal#/",
                redirectType: "DETAIL"
            },
            {
                itemId: "9a148960-d08f-473a-9d11-0ccfddec2c66",
                displayName: "DeepL",
                description: "精准翻译，支持多语种",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/DeepL.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7x5K8ZbMYXs7I4rC%2FY%2FhXcMmxo8%3D",
                websiteUrl: "https://www.deepl.com/zh/translator",
                redirectType: "DETAIL"
            },
            {
                itemId: "17a8586b-063c-4b6e-9966-f7a8f94fabc4",
                displayName: "知云文献翻译",
                description: "多引擎切换",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E4%BA%91%E6%96%87%E7%8C%AE%E7%BF%BB%E8%AF%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Ekv8HjeQXmHBfe%2BSFjj3qbulBVM%3D",
                websiteUrl: "https://www.zhiyunwenxian.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "128136a1-3c77-11f0-9b5b-bc24117649c5",
        displayName: "文献管理",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "eef36b0d-d730-4a7b-89a9-6e6442006684",
                displayName: "NoteExpress",
                description: "论文写作时的参考文献管理",
                logoPath: "./img/menu/bd6a2903f34f4fec89cd42c64a8b6bdc.noteexpress.png",
                websiteUrl: "https://jc.inoteexpress.com/dynamo/index.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "6d01137c-e654-4fe7-bc39-68343cdf3a1b",
                displayName: "Mendeley",
                description: "有强大的 PDF 识别和搜索功能",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Mendeley.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=AIS9MYV9MFDHk07KStHtwcjaK48%3D",
                websiteUrl: "https://www.mendeley.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "12898852-3c77-11f0-9b5b-bc24117649c5",
        displayName: "论文查重",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "c8fe8e32-f4de-4d1f-af7a-5ccae32039d8",
                displayName: "科研/期刊论文查重",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/291eabbc566e486eb1c68bb001b8366b.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fvVu9DMpr0%2F360VDzCv%2Fa3Y4tLs%3D",
                children: [],
                items: [
                    {
                        itemId: "156ec0d4-7f37-4e44-890d-1df980f6d8cf",
                        displayName: "paperyy",
                        description: "免费初稿，智能降重辅助",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/paperyy.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=I3LTspdkyhpwaqHLKKoZyDXMyzI%3D",
                        websiteUrl: "https://www.paperyy.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "dd9a7471-2490-4abc-b2a2-81a1b0656aca",
                        displayName: "iThenticate",
                        description: "国际论文查重，防抄袭",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/iThenticate.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aV6t4LnTzMf363n2DEjQbWbU74g%3D",
                        websiteUrl: "https://www.ithenticatecn.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "45e96f57-7350-451c-a594-7c6b2c5382be",
                        displayName: "Cross Check",
                        description: "国际上最权威的英文论文查重工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/crosscheck.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=pWRI96nyjLbWYfc5UX%2BsiSNOPC4%3D",
                        websiteUrl: "https://www.crosscheckcn.com",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "27c705c4-c627-4874-90f2-eefdeabf8512",
                displayName: "学位论文查重",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/2f9a0eee01034bb7b315e57577c43b9b.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=VNgHDu4gkWmOwAwo%2BDgHSHBYJVk%3D",
                children: [],
                items: [
                    {
                        itemId: "b6afca4c-2e25-4571-9014-00c43501f0f4",
                        displayName: "万方查重",
                        description: "数据全，侧重中文文献",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E4%B8%87%E6%96%B9%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rR%2FrJSW%2FmT7x6nE8Mirx7dg%2FAPM%3D",
                        websiteUrl: "https://check.wanfangdata.com.cn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1e707b83-3a63-442a-ba47-0d83dbda4d29",
                        displayName: "维普论文查重",
                        description: "算法严，高校常用",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%B4%E6%99%AE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Mg5EXQ%2BwyfysBRkSwTkUKMbVoqc%3D",
                        websiteUrl: "https://vpcs.fanyu.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "073b1426-f68a-4b00-a859-1d975fe94bfd",
                        displayName: "学信网查重",
                        description: "权威，本科 / 硕博适用",
                        logoPath: "./img/menu/d2304d74ada14e988f3713aeb59ffb4c.学信网查重.png",
                        websiteUrl: "https://chsi.wanfangtech.net",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8443131a-2fb5-49d5-b97a-41165875b325",
                        displayName: "知网查重",
                        description: "高校定稿首选，数据库全",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%9F%A5%E7%BD%91%E6%9F%A5%E9%87%8D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xEQkbrNGRvDz%2BAAxuQw4I7N6kng%3D",
                        websiteUrl: "https://cx.cnki.net/#/login",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "1220200a-3c77-21f0-9b5b-bc24117649c5",
        displayName: "数据分析",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "f4651d4e-f601-49b9-beb8-2ecf1b9bae8a",
                displayName: "SPSSPRO",
                description: "国产免费在线数据分析平台，一键自动化建模分析、生成报告",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/SPSSPRO%201.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=K8VmgYjTH%2F6TMBF7qxE5tBRG2t8%3D",
                websiteUrl: "https://www.spsspro.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "0a658d06-14b7-4657-b217-f0b98a259629",
                displayName: "Tableau",
                description: "一个可视化数据分析平台，帮助每个人做出数据驱动型决策",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/tableau.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=S5VCxCEmQLS93CR8K0gGt5qa7fk%3D",
                websiteUrl: "https://www.tableau.com/zh-cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "b1d7b85d-5e04-466b-bdb1-72c17abeef2f",
                displayName: "ChatExcel",
                description: "通过AI聊天，实现Excel处理和数据分析",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ChatExcel.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=IytYRF6Jw7OzxKsbKaq1lmeEL6o%3D",
                websiteUrl: "https://chatexcel.com/#/",
                redirectType: "DETAIL"
            },
            {
                itemId: "63e0d07e-89fc-4552-910a-a59f5aaaefe2",
                displayName: "Image-Pro",
                description: "一款用于科学图像处理和分析的软件，适用于2D和3D的图像处理、增强和分析",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Image-Pro.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=DqFMgE%2FKGn1VxykYkc%2BjglZFZ2s%3D",
                websiteUrl: "https://www.meyerinst.com/brand/mediacybernetics/image-pro-v11/",
                redirectType: "DETAIL"
            },
            {
                itemId: "764657d6-5479-4d92-83bc-f6a6ca1bff0b",
                displayName: "GetData",
                description: "一款专业的图形数字化软件，支持从多种图形格式（如TIFF、JPEG等）中提取数据",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/getdata.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=HXwdb5oDlY4iN%2B%2FU5xpZt4%2FWx%2Fw%3D",
                websiteUrl: "https://getdata.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1290200a-3c77-11f0-9b5b-bc24117649c5",
        displayName: "科研绘图",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "7b13485d-595a-4353-adbd-752a5791445a",
                displayName: "Origin",
                description: "一款适用于各种专业模式的数据绘图及分析软件",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/origin.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=I3iPbwitUdNKZlyyK6wxyojXXQE%3D",
                websiteUrl: "https://www.originlab.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "8bf98526-ec7b-499b-987c-f2100b77c3a6",
                displayName: "Adobe Illustrator",
                description: "矢量图绘制软件，适用于三维结构示意图绘制、数据图排版和细节调整",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/adobeillustrator.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=V3gVUAi2u5N%2BBq5vNUsHGcyoxKk%3D",
                websiteUrl: "https://www.adobe.com/products/illustrator.html",
                redirectType: "DETAIL"
            },
            {
                itemId: "c28c35fa-b6c4-429e-8fbb-abebc9cc2a42",
                displayName: "Inkscape",
                description: "免费的矢量图形设计软件，适用于科学图表和插图制作",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/inkscape.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=m4qiTaQmCSkjTQDpJnKRdxia%2BH8%3D",
                websiteUrl: "https://inkscape.org/zh-hans/",
                redirectType: "DETAIL"
            },
            {
                itemId: "c657f060-66d3-46eb-98a6-1d566970dd9e",
                displayName: "Blender",
                description: "一款开源的3D插图软件，适用于科研模型绘制",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Blender.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2VVoHJdxqnn2pN%2FIYDWMEjLGzgs%3D",
                websiteUrl: "https://www.blender.org",
                redirectType: "DETAIL"
            },
            {
                itemId: "f72ac387-c273-47f5-87fa-9ca6da8dbd51",
                displayName: "Mind the Graph",
                description: "一个用户自己DIY制作插图的平台，涵盖80多种学科素材，适用于新手",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Mind%20the%20Graph.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6DuLuRGe33M%2FTyS2NpjCfC%2B%2FHkQ%3D",
                websiteUrl: "https://www.mindthegraph.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "b92cd9f5-be36-4506-935a-10f8fff2f874",
                displayName: "GMT",
                description: "地球科学领域使用最广泛的制图软件之一，具有强大的绘图功能和数据处理功能",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/GMT.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GG%2BhBdHp9CctEjbyBwcp4p%2B0ELI%3D",
                websiteUrl: "https://docs.gmt-china.org/latest/",
                redirectType: "DETAIL"
            },
            {
                itemId: "bfb76955-39b7-4d96-bc5a-0de8cc0cad06",
                displayName: "BioRender",
                description: "生命科学领域的在线插图工具，提供了海量的图标和模板库",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/BioRender.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=dA3grJyPvrWbtW%2BGzGgVF0g%2FyY8%3D",
                websiteUrl: "https://www.biorender.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "07d6ebab-3a6d-4b59-9c58-449a83bc3b23",
                displayName: "ChemDraw",
                description: "化工及生物医药领域的强大科研绘图工具,能够快速、准确地绘制化学结构式和生物分子图形",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/ChemDraw.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ML1jw%2FX5%2B%2FHGuQM15P8ROwHzFbA%3D",
                websiteUrl: "https://www.chemdraw.com.cn",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1220200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "基金项目",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "27a8c518-e274-4ee1-ab72-d39f713fa58f",
                displayName: "自然科学基金委",
                description: "国家自然科学基金委员会",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E9%87%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=F52YYe6HGFtFwdtB91%2FLhkqGjk0%3D",
                websiteUrl: "https://www.nsfc.gov.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "255fc2af-6f26-4671-88d5-0f4c1ba51e14",
                displayName: "科学网基金",
                description: "支持所有学科类别的项目查询及立项项目的快捷检索",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%A7%91%E5%AD%A6%E7%BD%91%E5%9F%BA%E9%87%91.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=XyKpJSkbFvSdntYV3fergP3ru9c%3D",
                websiteUrl: "https://fund.sciencenet.cn",
                redirectType: "DETAIL"
            },
            {
                itemId: "4fac11d2-3d8f-4119-8868-39c83fd03941",
                displayName: "青塔｜自科云",
                description: "全球科研基金项目在线查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E9%9D%92%E5%A1%94.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=LVhZ9DKo9pIZ32hJGvHa1yk6E40%3D",
                websiteUrl: "https://fund.cingta.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "1a11248e-8213-4372-96c8-631d2db0c7dc",
                displayName: "国家社科基金项目数据库",
                description: "社科类项目查询",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%9B%BD%E5%AE%B6%E7%A4%BE%E7%A7%91%E5%9F%BA%E9%87%91%E9%A1%B9%E7%9B%AE%E6%95%B0%E6%8D%AE%E5%BA%93.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=0sgLYvLcrJitviuLnB0%2BqEkQ5cY%3D",
                websiteUrl: "http://fz.people.com.cn/skygb/sk/index.php/Index/index",
                redirectType: "DETAIL"
            },
            {
                itemId: "664b28c5-5c3a-4d5c-92d0-4815fa634ce6",
                displayName: "MedSci（梅斯医学）“全球基金查询”",
                description: "聚焦医学健康研究项目，实时更新",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/MedSci%EF%BC%88%E6%A2%85%E6%96%AF%E5%8C%BB%E5%AD%A6%EF%BC%89%E2%80%9C%E5%85%A8%E7%90%83%E5%9F%BA%E9%87%91%E6%9F%A5%E8%AF%A2%E2%80%9D.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=cFIGj717jVrgJUOgwmVF6oWwn%2BY%3D",
                websiteUrl: "https://www.medsci.cn/sci/nsfc_index",
                redirectType: "DETAIL"
            },
            {
                itemId: "947c1432-e18f-4006-b87b-d71b88808d97",
                displayName: "ZCOOL国家自然科学基金查询",
                description: "提供部分学科的科研基金项目在线查询服务",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/zcool.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=RXB9NebxN5DrjXX%2FGDQ7pSk5hbo%3D",
                websiteUrl: "http://fund.keyanzhiku.com",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d5",
        displayName: "科研社区",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "074ad74c-817a-4663-9234-7423be88aa72",
                displayName: "ResearchGate",
                description: "一个为科研人员设计的社交网络平台，“科学界的Facebook”",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/researchgate.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=52moqCVn1%2BOGuDBBzC%2Fl1tnuGUY%3D",
                websiteUrl: "https://www.researchgate.net",
                redirectType: "DETAIL"
            },
            {
                itemId: "f259ced2-eb4f-4e93-a5b6-094a52a11f26",
                displayName: "LinkedIn",
                description: "为科研人员提供了展示研究成果、寻找学术合作、了解学术动态的平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/LinkedIn.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=251QY%2FhygLxHy7841oFfkMldRrI%3D",
                websiteUrl: "https://www.linkedin.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "05532fec-7f58-45c5-bb55-953a68685f0e",
                displayName: "Academia",
                description: "专注于学术交流和科研论文分享的学术型社交网站",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/Academia.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=avKBBn8urI1BAnkcwEVAA8IeM4E%3D",
                websiteUrl: "https://www.academia.edu",
                redirectType: "DETAIL"
            },
            {
                itemId: "61fea3ca-e564-4a9c-a0fa-2267dae2954f",
                displayName: "LabRoots",
                description: "可实现虚拟可视化交流",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/labroots.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=u6qCWXW7O0SPXoRCqQe0ptvkl3o%3D",
                websiteUrl: "https://www.labroots.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "f28d95f9-acc0-4b2c-940a-47ea9bac9a71",
                displayName: "GitHub",
                description: "科研代码向交流平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/github.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EHjXbX%2FBi0tQv5pPRgaC7CPBv%2FM%3D",
                websiteUrl: "https://github.com",
                redirectType: "DETAIL"
            },
            {
                itemId: "c0a3e97e-569d-4fb5-942b-8f16c354f416",
                displayName: "小木虫",
                description: "国内学术科研互动平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E5%B0%8F%E6%9C%A8%E8%99%AB.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2B7g8DbSgNMYgYrqWI9cmiDLK8i0%3D",
                websiteUrl: "https://muchong.com/bbs/",
                redirectType: "DETAIL"
            },
            {
                itemId: "72f3bcb3-f1b3-4dcd-b1c7-afbc63e73de8",
                displayName: "经管之家",
                description: "国内最大的“中国经济学”学术交流平台。",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/%E7%BB%8F%E7%AE%A1%E4%B9%8B%E5%AE%B6.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=sv6tPqHtfG7iemy4nlXmdog880Y%3D",
                websiteUrl: "https://bbs.pinggu.org",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d56",
        displayName: "预印平台",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [],
        items: [
            {
                itemId: "f3e4ec2a-a3a1-4994-93e5-03b51ac29f8c",
                displayName: "arXiv",
                description: "全球最大的预印本平台之一",
                logoPath: "./img/menu/8ce573302fce48c59f115db0d64e522c.arxiv.png",
                websiteUrl: "http://arxiv.org/",
                redirectType: "DETAIL"
            },
            {
                itemId: "9eb1800a-9453-42a2-b345-265ff28e1a19",
                displayName: "bioRxiv",
                description: "生命科学预印本平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/3e627ddd76a14f70bac66a62e881aec5.bioRxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=nnta%2BO6HW1FzMNCFsfSYqZnWLEU%3D",
                websiteUrl: "https://connect.biorxiv.org/relate/content/181",
                redirectType: "DETAIL"
            },
            {
                itemId: "593c6308-4e8f-40c8-a79b-fdeed613aabe",
                displayName: "ChemRxiv",
                description: "化学领域预印本平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/04dd17d2117045a7b53001719a1de998.ChemRxiv.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=e2W97ahwp2tdKiYSIcv42CPq3H4%3D",
                websiteUrl: "https://chemrxiv.org/",
                redirectType: "DETAIL"
            },
            {
                itemId: "85bbfdd7-dc6f-455b-a7f7-611cfd60f1f4",
                displayName: "SSRN",
                description: " 社会科学和人文学科最重要的预印本平台",
                logoPath: "./img/menu/ssrn.png",
                websiteUrl: "https://www.elsevier.com/products/ssrn-preprint-services/research-networks",
                redirectType: "DETAIL"
            },
            {
                itemId: "1cd97e95-419d-4160-adae-0922b103aba0",
                displayName: "Preprints.org",
                description: "多学科预印本服务平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/5d302bcea0a8452b9850c1d626a4e606.Preprints.org.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xspN2veZKS9i%2Fonv9grNmmIQOuQ%3D",
                websiteUrl: "https://preprints.org/",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "1240200a-3c27-21f0-9b5b-bc24117649d57",
        displayName: "编程辅助",
        nodeType: "MENU",
        iconPath: "line-md:clipboard-list",
        children: [
            {
                nodeId: "f827b175-6c22-4d7c-84c1-7a62479f3041",
                displayName: "代码阅读",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/cf46d671b7764d84b23edfc1eac17850.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TsP8Q2WNd6kZJrGD9J5QcTRvOHc%3D",
                children: [],
                items: [
                    {
                        itemId: "9c6c8292-8782-4d73-9bdb-895c0b7cd054",
                        displayName: "OpenGrok",
                        description: "一款免费、开源、功能强大、运行流畅的代码阅读器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/b08ef51a287344369c61f46ec01cf521.OpenGrok.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=r4tSzN4jusCgEntpuFGuBZzAX8w%3D",
                        websiteUrl: "https://github.com/oracle/opengrok",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1fa1a3dc-fa46-4231-a5fb-ad2a1e12ae1d",
                        displayName: "Sourcetrail",
                        description: "开源免费的源码阅读神器 Sourcetrail，高效阅读python，pytorch等深度学习框架代码",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/b5f53e8f808f4cecbeb537df9ec608c4.Sourcetrail.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=WjbS5meOC%2BvHVUBBw1sZMWf7bmU%3D",
                        websiteUrl: "https://www.sourcetrail.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e94f6fa5-5e58-4481-8d13-d2e234e265cc",
                        displayName: "Scitools Understand",
                        description: "静态代码分析神器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/e5c5a08220744fb29a4bcf0f282dc870.Scitools%20Understand.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2XtGtyWYbcmAqk8B%2BX65JDia6A0%3D",
                        websiteUrl: "https://scitools.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6e2c09de-83ff-4f8d-97d4-37524e5fdea2",
                        displayName: "Source Insight",
                        description: "一款用于代码阅读和管理的软件工具。",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/53e2cbefef3340239177954efb522f93.source%20insight.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YDFw7Xjy%2BMTPJ7ZUCHxy0%2FuoeSE%3D",
                        websiteUrl: "https://www.sourceinsight.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ad93db13-0d7a-41fa-85e9-6c9880f6edf0",
                        displayName: "Codemap",
                        description: "一款辅助阅读源代码、分析项目结构的工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/8df489dd6b854f96af591858f534a869.codemap.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bTuakkIWvT8wAnTQHwekmjM8ETQ%3D",
                        websiteUrl: "https://www.codemap.info/index.html",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "3a718ee9-61da-4ec5-95ed-bbceeea993be",
                displayName: "代码编写",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a3e5ece0966b49b287904a929e8bffdd.bianchengfuzhu.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Y1RedxWJrNpRDb49q347i6jf1%2Fs%3D",
                children: [],
                items: [
                    {
                        itemId: "70fca86b-1838-4456-94cd-52e3dc3067b8",
                        displayName: "Codeium Windsurf",
                        description: "Codeium 公司推出的最新一代 AI 辅助引擎/模型",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c50565d3e4ad4cc9979fc7816d18153b.Codeium%20Windsurf.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=MeleucYxvxg%2BtepEC1WPp25RXAA%3D",
                        websiteUrl: "https://windsurf.com/editor",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f2bc16b6-c15b-4f5a-9b00-c3a960db0359",
                        displayName: "cursor",
                        description: "从零开始构建的现代化AI集成IDE",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/8fce08380b4c4454a3359f222d9678f1.Cursor.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KNM8MEarIap6mSaiGFITUqwEqh4%3D",
                        websiteUrl: "https://www.cursor.com/ja",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "de08ec5e-a829-4ac2-801e-89c916c8cee1",
                        displayName: "Trace IDE",
                        description: "功能丰富的AI驱动IDE，集成Claude 3.5和GPT-4",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/93fa4947366d43d9aab2384a07291442.Trace%20IDE.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=5EZtpy09YZM1aLerrp%2FZm%2FoZyQk%3D",
                        websiteUrl: "https://traeide.com/zh",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4416d792-06fd-49a1-952c-024b2a8cb504",
                        displayName: "Amazon CodeWhisperer",
                        description: "适用于软件开发的最强大的生成式人工智能助手",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5ac6531ca0b64022b9006e743d231500.Amazon%20CodeWhisperer.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=o%2FMQgEwAPcyfFV29UHgINC%2BE36o%3D",
                        websiteUrl: "https://aws.amazon.com/cn/q/developer/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c711e134-2d64-4d85-b0e6-9c5275d8545f",
                        displayName: "GitHub Copilot",
                        description: "GitHub 和 OpenAI 联手打造的人工智能编程助手",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/4d0f3506883e47a8ae52d2049e2a99b2.GitHub%20Copilot.png?Expires=1758265970&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=8R6vIxQuTFoa5XaIeijDinGJ%2Bac%3D",
                        websiteUrl: "https://github.com/features/copilot",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    }
];

/** 计算机科学菜单节点 */
export const computerMenuNodes: MenuNode[] = [
    {
        nodeId: "66dcd064-de43-4438-b04e-83f577264e43",
        displayName: "鱼丸推荐",
        nodeType: "MENU",
        iconPath: "line-md:thumbs-up",
        children: [],
        items: [
            {
                itemId: "f5c80bb6-d700-42d7-99a1-da1bd1f1257e",
                displayName: "GitHub",
                description: "全球最流行的代码托管平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/eb2c69c71b5c442ab47c08551069faaf.Github.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=j4FNYCh0pF%2FyVFAMCMQqO4Qwi4A%3D",
                websiteUrl: "https://github.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "1f509005-8784-45e8-9d7f-b5845defe764",
                displayName: "GitLab",
                description: "一站式代码托管和研发协作平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/082f56e69e0c48d194a17626e2b57d0c.GitLab.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OjYeSx25t4OkGcOTLhgmNdJJQD0%3D",
                websiteUrl: "https://gitlab.cn/",
                redirectType: "DETAIL"
            },
            {
                itemId: "744343ec-e020-49e4-9bc5-1f7de695ab71",
                displayName: "Gitee",
                description: "代码托管、企业研发效能平台",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/97d5f7f338e84663812bfe8ad9445bc1.Gitee.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=x7ld4YPfI8LRn2bKbHYC3udRbo4%3D",
                websiteUrl: "https://gitee.com/",
                redirectType: "DETAIL"
            },
            {
                itemId: "5c59a751-cddb-4b24-b9ef-8b97acfb699c",
                displayName: "TensorFlow",
                description: "由 Google 开发的开源机器学习框架",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/59b25fb779dc4af5b08536d7d0b2ccbf.TensorFlow%20Federated.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=1HLbRPM8B3BdjmXqhOY5Z79yoJA%3D",
                websiteUrl: "https://www.tensorflow.org/",
                redirectType: "DETAIL"
            },
            {
                itemId: "28dedb0b-2bab-4123-953f-59b42567f4c8",
                displayName: "PyTorch",
                description: "由 Facebook 提供的深度学习框架",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/2046354cf2004607a76b74c4632b3a0e.PyTorch.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6PuG2PvnTvGEUbOM0T1SlGsjoo8%3D",
                websiteUrl: "https://pytorch.org",
                redirectType: "DETAIL"
            },
            {
                itemId: "fdfba881-f370-4364-aa04-b0c7c5181a37",
                displayName: "OpenCV",
                description: "广泛使用的计算机视觉库，支持图像和视频处理",
                logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a99b48dc32c443ccae82950a584c031c.OpenCV.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=v6A8qJA5BEkSxl8pDiNRGQ2V7qI%3D",
                websiteUrl: "https://opencv.org",
                redirectType: "DETAIL"
            }
        ]
    },
    {
        nodeId: "6b1b9172-063b-46b0-91ff-acd0e0094d31",
        displayName: "科研开发",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3cde3c1a42a741ec881fe8dcb60af949.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FV6kFwljcJTlPCsoO5%2BI7pLEGCA%3D",
        children: [
            {
                nodeId: "305d6c8f-b42e-4e4d-b1a4-8d20ba94565e",
                displayName: "开发环境",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/1e0c136d4d5c4e43bd3c635da5dd5f65.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=tG1%2FLdG18IZ0WlqJ6YsFxoKbYEE%3D",
                children: [],
                items: [
                    {
                        itemId: "88c8d75d-9f9b-4491-8b04-0d1457fd230b",
                        displayName: "Catalyzex",
                        description: "查找论文、开源代码工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/afec9fc319dd47bba9e678809ba44c07.catalyzex.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rB3CGfiTGWOx8I5NEVRVSkTcWxs%3D",
                        websiteUrl: "https://www.catalyzex.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "cc968329-c07f-4e63-a1e1-84d954e6b994",
                        displayName: "w3schools",
                        description: "科研工具、AI工具、编程学习等",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/dbafdf73a42c4cc5bdee380a6a5fca3f.w3schools.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=w%2BrBW1YZmqHJxyrB%2BGN3SB3Ey38%3D",
                        websiteUrl: "https://www.w3schools.com/html/default.asp",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "83181c4f-3ac4-43f1-8c9d-1e55744db67d",
                        displayName: "Pycharm",
                        description: "代码编译器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/57252c0b3e34406d83d326803de5923d.Pycharm.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=hw458oA7%2BMxAOVwDNqaYhNlvCBM%3D",
                        websiteUrl: "https://www.jetbrains.com/pycharm/#",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "35bb0408-22e1-4270-97d2-df4ccecfdd7a",
                        displayName: "Visual Studio Code",
                        description: "代码编译器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/04565cfe6ecc46b5a14751d431c77863.Visual%20Studio%20Code.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GHqjV2mW51Ew5sPwuDRrcQJmfqM%3D",
                        websiteUrl: "https://code.visualstudio.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "90c1391c-2b3d-4f0e-ada9-0a4cc3ff20ef",
                        displayName: "Jupyter Notebook",
                        description: "开源Web应用",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5bb0c3a4d3a142049690c881460e039d.Jupyter%20Notebook.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FN5r6LWIqO2iBMdgTXiTODDYMaY%3D",
                        websiteUrl: "https://jupyter.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1eea8c54-6b42-481e-b601-04a68440fc6e",
                        displayName: "Cursor",
                        description: "Ai代码编辑器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/0e8b0c33724d41e6a16d17179345ebca.Cursor.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=rJlL7NXwNyTCYiJcXpzFUuzHd7w%3D",
                        websiteUrl: "https://www.cursor.com/cn",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "2f5537ef-d976-4b22-8673-2e9da969ba63",
                displayName: "代码管理",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9e2e8baae03b406b922130081204c6b3.Frame%20427321649-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ufDAzGEEuMgNqEjUi%2FCbvZdOvbg%3D",
                children: [],
                items: [
                    {
                        itemId: "e4fa4d9a-65c9-4c20-bfa4-e203d7055d2f",
                        displayName: "LabML.ai ",
                        description: "代码逐行解读网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3e443fcb6cdd444a98fdcbb83348adea.LabML.ai.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6pTDPDbBisT7MGFmM%2FGTSgOts4U%3D",
                        websiteUrl: "https://nn.labml.ai/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d061d995-6588-42d1-989f-e28ab9f02307",
                        displayName: "Developer Roadmaps",
                        description: "开发者路线图资源库 ",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a06faebd57d54b74bef624d61fd46c97.Developer%20Roadmaps.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=amDs4EBBPbTw%2FMDWM8%2FRUeYzDkg%3D",
                        websiteUrl: "https://roadmap.sh",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9278311c-3ab2-4c54-a2a2-4fc909cfd59f",
                        displayName: "Github",
                        description: "全球最流行的代码托管平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/207d553a393f492f9c8570c8f2995000.Github.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Gls7xKHwdyWhjw56q8XTyDBYmjA%3D",
                        websiteUrl: "https://github.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4e6a1bfa-d7cf-45c6-a637-20256fba5e91",
                        displayName: "GitLab",
                        description: "一站式代码托管和研发协作平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5e947626b2e142b98f3027e4b6c28ec4.GitLab.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=frYj9diMg8nnC7yHmAFTbMwmZHA%3D",
                        websiteUrl: "https://gitlab.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d6e1d3bb-1e1d-4d81-834c-798ca1a82860",
                        displayName: "Gitee",
                        description: "代码托管、企业研发效能平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9d1dfc2073994ca28e2d7d3c45c76621.Gitee.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=XsLRSGcpJ7yc4q%2BxzJ%2BgWfz28%2FI%3D",
                        websiteUrl: "https://gitee.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "aebc86ab-99cf-4ffe-8b92-d59ddb3ab401",
                        displayName: "Bitbucket",
                        description: "源代码托管网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/93379050641f4cfe94d427e29dbe7c09.Bitbucket.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=XyHpkY2NxlThn5XtVhHYRhb%2Fsjw%3D",
                        websiteUrl: "https://bitbucket.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4307df4a-e03f-4223-bf29-eba3b8e41db9",
                        displayName: "3Blue1Brown",
                        description: "斯坦福神经网络动画",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/840ee190f43f4d5a8af599a1954f322b.3Blue1Brown.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ui7JF%2BMlu%2BlTfIKoMeBty1n0200%3D",
                        websiteUrl: "https://www.3blue1brown.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "20efda4d-c368-4586-875c-6656d5092594",
                        displayName: "Gerrit",
                        description: "基于Git的免费开源代码审查工具‌",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c0c6483bbc02440a8f814127572ff7b6.Gerrit.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ly3GKb76b%2Fibrj16FbuoUVYvbSs%3D",
                        websiteUrl: "https://www.gerritcodereview.com",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "81eb4d6e-4324-4615-8466-7ccf291306c3",
        displayName: "人工智能",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/33cb34d95ea9403dbc6d4706d9540d92.Frame-6.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=HBhQ39ioK3PnSBUKI437vcxATB4%3D",
        children: [
            {
                nodeId: "66ddb2cd-7d57-4f60-83f9-8422de756915",
                displayName: "强化学习",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/09fa5560af2e4a5284a83576451352c6.Frame-3.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=v%2BSGrsdrq7eJUFfux45JdipolW4%3D",
                children: [],
                items: [
                    {
                        itemId: "97446ebc-6a06-4268-b801-b3963df8b821",
                        displayName: "OpenAI Gym",
                        description: "OpenAI 提供的强化学习工具包",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3730333e410e4d7984fca87ef182dc89.OpenAI%20Gym.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FDqahecqwu%2FOr%2FPrjfJCswxkQVE%3D",
                        websiteUrl: "https://gymnasium.farama.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "004c367e-93d2-40d1-b786-d099af45c7cc",
                        displayName: "Ray RLLib",
                        description: "Ray 的强化学习库，支持大规模分布式训练",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/4aadfdb54f6f40dcadd5adb2ae17a935.Ray%20RLLib.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=oHfGZXdIfduj3McgQ3%2Bq9sczXxo%3D",
                        websiteUrl: "https://www.ray.io",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "d973119c-7b65-4454-8fab-cca2a0661be0",
                displayName: "机器学习",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d3a4053692a94fef896c0911cf7d4f35.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=NyyWzwCrGUIUTKAzGo83Dd8tv6o%3D",
                children: [],
                items: [
                    {
                        itemId: "8174ee84-498d-410a-9fe2-12274c549796",
                        displayName: "scikit-learn",
                        description: "Python 的一个机器学习库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a8940b8a2e6d495fbe472cba7e1ca16c.scikit-learn.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OGbsydwHXBpODoZbJy9YD8skKzo%3D",
                        websiteUrl: "https://scikit-learn.org/stable/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "0b1772b0-4c72-41e3-9da2-d04050cca6a8",
                        displayName: "AWS AI & ML",
                        description: "Amazon Web Services 提供了广泛的人工智能和机器学习服务",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7d551c702ce94e1f8220045db711c7ec.AWS%20AI%20%26%20ML.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2B4SfRExiQkDV7rD9i0CNSs8mLco%3D",
                        websiteUrl: "https://aws.amazon.com/cn/ai/machine-learning/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2531a4d3-d63f-4034-90f3-f88b4512d4f7",
                        displayName: "Microsoft Azure AI",
                        description: "提供了多个人工智能和机器学习服务",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/035a18a9291641dea8f50b39c260aa10.Microsoft%20Azure%20AI.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bRfSz1mk7y2N26vz77Pk%2FoTEeDU%3D",
                        websiteUrl: "https://azure.microsoft.com/en-us/services/machine-learning/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "5eb287f1-544f-411f-82d4-5a380dbf3b04",
                        displayName: "XGBoost",
                        description: "高效的梯度提升决策树（GBDT）库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d1123e1a7c104748b9a7de15f959bad5.XGBoost.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yqEB0Eq9e6u1DvqLm0aZmc%2F7EeE%3D",
                        websiteUrl: "https://xgboost.ai",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "172f8e8d-0534-4d8f-ac57-d13f0c8068c9",
                        displayName: "LightGBM",
                        description: "一个高效的分布式梯度提升框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/f9ae988ac1694eef83ae73bfdbb9f639.LightGBM.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=dDChxjYYHDm8qqRfeL1muDCAGj0%3D",
                        websiteUrl: "https://lightgbm.readthedocs.io/en/stable/",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "b833f058-f0f3-4e7b-92fe-6d1f7ab489cb",
                displayName: "深度学习",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/1b6a22e46995476fb2935f4199175f29.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bCj3ZxrIoC9bm%2FLcpgYsJz%2BZGkI%3D",
                children: [],
                items: [
                    {
                        itemId: "4a63a96a-4c23-42ad-a14a-86cd93f0ad35",
                        displayName: "TensorFlow",
                        description: "由 Google 开发的开源机器学习框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/2ea9f7fa234f46b78c449dd1208b26af.TensorFlow%20Federated.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=oFz7Vc9K0YSJ9Rtm9kjNENlXq9c%3D",
                        websiteUrl: "https://www.tensorflow.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "efe17d8e-1e64-43dd-90cc-919221ee5d5c",
                        displayName: "PyTorch",
                        description: "由 Facebook 提供的深度学习框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c2c742cb5ddb4779aec37a4f0e12db93.PyTorch.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aNyBgxL9%2BXDzRyH8%2Bg5tXxUyOGY%3D",
                        websiteUrl: "https://pytorch.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4d812ed8-1f2a-4611-8ad2-f5a9ffc5e775",
                        displayName: "Keras",
                        description: "高层次神经网络 API",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9f8557ae35934d20b56eec7a40431bdc.Keras.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YPyRwd5sf8l6BLbHcvRuUVju%2B5Q%3D",
                        websiteUrl: "https://keras.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bb568d8d-a5f2-4a79-a6eb-514c16f63aeb",
                        displayName: "Caffe",
                        description: "一个深度学习框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/f1dc98bc5f674538b9794bfc71ed5b6a.Caffe.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bscalk2pprcyDfTskC7g6RZRWaM%3D",
                        websiteUrl: "http://caffe.berkeleyvision.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "863d7882-3fb5-46f4-a0d7-e8c1caab8413",
                        displayName: "MXNet",
                        description: "开源深度学习框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7d4f438717d7427c91e48cc66af477a0.MXNet.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=W8B1pJJaHacFfH8qQpOm0W2EE%2Fc%3D",
                        websiteUrl: "https://mxnet.apache.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d7974dd3-e739-4a21-8ee5-9accb262dd88",
                        displayName: "Fast.ai",
                        description: "简化深度学习框架的工具和库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7edb3793a19049268bdf3febbd7698a1.Fast.ai.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Kdq9k6BDSZnpOwXhAHoRayUZ8Z8%3D",
                        websiteUrl: "https://www.fast.ai",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "b0110301-cbf0-4b73-b0d8-775b2fe3c9ac",
        displayName: "可视化",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a6bdce78bb044b1cab949bc33cda4245.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KHRlh6JrtAMyqOqHbOKFH99AmOg%3D",
        children: [
            {
                nodeId: "e038f051-f5f4-42a6-a710-4bd4b8c87a4a",
                displayName: "绘图工具",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/0660750b71664ba082d2a0bc12d2516c.Frame-5.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=GIbFgXycBqJr%2Fvvo3kQZ0%2FXC5KA%3D",
                children: [],
                items: [
                    {
                        itemId: "77fa4611-fcd7-44ee-ae31-73623167fee0",
                        displayName: "R Graph Gallery",
                        description: "R绘图网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/dd888281a6c94026a7b7c8f764ec96b3.R%20Graph%20Gallery.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=i5Ozm0mJEqLV9sdI3b6cf3OCqwM%3D",
                        websiteUrl: "https://r-graph-gallery.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e2ba68ba-d2e1-42ba-851b-1f5cb57b2c9f",
                        displayName: "Zetane Viewer",
                        description: "神经网络3D可视化工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/84deb205344c42a59e0d70097dcdbca5.Zetane%20Viewer.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=f%2FQCsI%2BTbwXaC%2FVX6Ug9yaRMjAo%3D",
                        websiteUrl: "https://github.com/Zetane/viewer",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "584905e4-7105-4f5e-99dd-2d2047337bc4",
                        displayName: "Zetane Insight Engine",
                        description: "AI驱动的数据可视化工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/183b5871e16d43b8b5f2466b02d7aa8b.Zetane%20Insight%20Engine.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=62PzzYPfOzDSAC%2FEeOUFvVpkop4%3D",
                        websiteUrl: "https://zetane.com/insight-engine",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "5059d9a4-4dd0-48d3-aafe-679b45877386",
                        displayName: "NN-SVG",
                        description: "科研绘图神器",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c4762801fcd7446bb2e41d3718ea3724.NN-SVG.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YBweUIfGigJRITOD6EOHr3GWX%2FE%3D",
                        websiteUrl: "https://alexlenail.me/NN-SVG/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4d890da4-e66e-47df-936a-52bb5dbbbfd1",
                        displayName: "pyCirclize",
                        description: "圆形科研图绘制工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/bb2475d3b2e740e5b83a8f95a5b36a8d.pyCirclize.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=3r0XIJqg3nMwqpeIMPvkMK4gG%2Fw%3D",
                        websiteUrl: "https://moshi4.github.io/pyCirclize/getting_started/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "6638b06c-fce6-451b-9f39-795f894839f8",
                        displayName: "Python Graph Gallery ",
                        description: "科研绘图",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7300c4aaa7484c1982b6560a66b6550e.Python%20Graph%20Gallery.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=jHOBQzlYpnzUjtWgCmTbnImXniw%3D",
                        websiteUrl: "https://python-graph-gallery.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1afb36ba-9f12-4662-8140-cbd1fe43cd72",
                        displayName: "Hiplot",
                        description: "数据可视化平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/221ed60c7bec4292890f3d37d25f4af5.Hiplot.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=1dQHQ6YW7SqUoWUOyAmstl2GQYA%3D",
                        websiteUrl: "https://hiplot.cn/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4de781c6-2d2d-49b2-8713-0542e138fa3e",
                        displayName: "ECharts",
                        description: "科研数据图代码网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5efa5c860dd54d779e7f8e385ac45fc0.ECharts.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=PUlpAWSpTWU7cogDXarmIImu18o%3D",
                        websiteUrl: "https://echarts.apache.org/examples/zh/index.html#chart-type-map",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9f7381c2-201a-49d7-b316-46df07cfb88b",
                        displayName: "Matplotlib",
                        description: "Python 数据可视化库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/89ae8a4d8d634211986b390bb3947c7f.Matplotlib.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Aoh6BCdeG4KSMPo14QdoB45P5s0%3D",
                        websiteUrl: "https://matplotlib.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f830544f-dd60-409b-9148-88618560fecb",
                        displayName: "ggplot",
                        description: "基于R语言的图形绘制包",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/2716b5748b5b46b5b2ca33557ca358d3.ggplot.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=jayJbusy2TttQcFReUw5S%2BQsd0k%3D",
                        websiteUrl: "https://ggplot2.tidyverse.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "08dc711d-85a4-4887-b1fd-48bf1c05984a",
                        displayName: "Power Point(PPT)",
                        description: "一款微软公司开发的幻灯片展示软件",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/57936e0d9ef043ac8e43753656cfc748.Power%20Point%28PPT%29.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Smp4bbjhbodvAu7zcIN0Ls6uDBs%3D",
                        websiteUrl: "https://www.microsoft.com/zh-cn/microsoft-365/powerpoint",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "63c193cb-bb35-40c9-bfa2-36ca85eb865b",
                displayName: "数据处理与清洗",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9f0b3f789fbd425280e876cca423d5e3.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=77PgVM700ZMyy2tbcR2YLGB5o84%3D",
                children: [],
                items: [
                    {
                        itemId: "66187e5d-e955-4688-8606-5e59d667b892",
                        displayName: "Pandas",
                        description: "强大的数据处理和分析库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/adfe33ecae33438a9c376d00b96ee430.Pandas.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=8Dv7crKJ%2F5oR9nmM96tAFQ53OQ0%3D",
                        websiteUrl: "https://pandas.pydata.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "fa3423b0-1a9c-4773-bf18-835561c1892e",
                        displayName: "Numpy",
                        description: "Python 科学计算库，支持多维数组和矩阵运算",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9e89eefd74e946baa522e24a8d9a9c95.Numpy.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=CaRHfOfvsK%2ByBHomEoojMn7fjrk%3D",
                        websiteUrl: "https://numpy.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7eae3c78-13a1-407e-bc86-3598e9a07641",
                        displayName: "Dask",
                        description: "用于并行计算和大数据处理的 Python 库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/f89542a4187e459d8e71483c209dbec7.Dask.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=4zhXmss68JLfmEbBoksNvaAW1p4%3D",
                        websiteUrl: "https://dask.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "af890a51-a3f0-40b2-8fc8-919b359f6a52",
                        displayName: "Vaex",
                        description: "一个用于大规模数据集的延迟计算和可视化的 Python 库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/6ac9001ec26047fbb5623548d933059d.Vaex.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FD17Auh7QwHC8IWrByAgZRRgKmk%3D",
                        websiteUrl: "https://vaex.io",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "b46c5f19-a9e0-4959-aa51-00aa50639412",
                displayName: "算法可视化",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9d9300c2a2504c5bb946f708689cb0f0.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=waAyZr3LL9b72JH0HQRTtM5NFWQ%3D",
                children: [],
                items: [
                    {
                        itemId: "e50cb09e-3fc9-440e-9cef-d70652804bf4",
                        displayName: "Roboflow Universe",
                        description: "机器学习数据集网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/60b6ff13ed214c8bb78b7fc9b827a4fc.Roboflow%20Universe.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7thTFtNrw6lkjbCIWqagk37KyjI%3D",
                        websiteUrl: "https://universe.roboflow.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "366e8cd4-6e99-4628-ac54-636765ff265d",
                        displayName: "TensorFlow Playground",
                        description: "快速理解神经网络原理的网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/1f45878110524200b2a69b89b456968f.TensorFlow%20Playground.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7LZGdMdYNNDD3Z7dlyBJZ03GgMo%3D",
                        websiteUrl: "https://playground.tensorflow.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c5eacc6b-428d-4322-b51c-319b21630cfd",
                        displayName: "Deep-ML",
                        description: "机器学习Leetcode算法刷题",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/e537d238708c40a88ca2ddb85da197ee.Deep-ML.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=SZQzqPJNqLV7oRj1mN26jitLoIg%3D",
                        websiteUrl: "https://www.deep-ml.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "946931ab-a1dd-47e2-9c9d-b0fc5b656cda",
                        displayName: "AI by Hand",
                        description: "一个 Substack 电子邮件订阅博客",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/09c64b9f446b47ff8b88b751a5566aa5.AI%20by%20Hand.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ICpevmZtSd12Uy41xGqfmjThNso%3D",
                        websiteUrl: "https://aibyhand.substack.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d2075af9-f5df-433d-96bb-914b81db5932",
                        displayName: "Algorithm Visualizer",
                        description: "算法可视化网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/af319af84b1a41cca677ed80b5eace47.Algorithm%20Visualizer.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Kj59iTWYisi6z3Tz%2FlMH73tnhWg%3D",
                        websiteUrl: "https://algorithm-visualizer.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "e98c6c32-b38b-46e7-8ab2-df5fe5e07820",
                        displayName: "One Small Step",
                        description: "大模型前沿技术科普",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/177319a8e0954e0199e866a97e72f650.One%20Small%20Step.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=J%2F%2BXuotQkQpXqmmteA4KnWO6lN4%3D",
                        websiteUrl: "https://github.com/karminski/one-small-step?tab=readme-ov-file",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9a9ff5ef-89f1-4bad-9b5d-524327034e41",
                        displayName: "Transformer Explainer",
                        description: "Transformer可视化",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/ce30a9c1635f4c3f91351824323b9fd7.Transformer%20Explainer.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=izcIPV7inx8dinuzdTuWwqvVI4U%3D",
                        websiteUrl: "https://github.com/poloclub/transformer-explainer?tab=readme-ov-file",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "4644bb8c-60cd-428c-9382-b61f4643a972",
                        displayName: "100 Days of ML Code",
                        description: "机器学习100天项目",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/03849f330aad4025b544c3858d7faa39.100%20Days%20of%20ML%20Code.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TRU%2FpLNItjOC6Mveitbjt5mJBes%3D",
                        websiteUrl: "https://github.com/Avik-Jain/100-Days-of-ML-Code-Chinese-Version?tab=readme-ov-file",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f9d4012a-628a-403f-a0f8-56345ad9adda",
                        displayName: "Wandb Weave",
                        description: "全自动调参工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/c5dc500ff3e54c53b1ee850af5d1772e.Wandb%20Weave.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=RGnyQv5kqO1RM8XIulxepKgxFXE%3D",
                        websiteUrl: "https://wandb.ai/site/weave/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ed529197-c125-48cf-bbfd-686b3f0fbbb1",
                        displayName: "TensorBoard",
                        description: "TensorFlow 提供的可视化工具",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7b3f5decc437457f83741d94d3d50293.TensorBoard.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Gj4lMfwd8PWbtqM%2FSD3EovPRy3g%3D",
                        websiteUrl: "https://www.tensorflow.org/tensorboard",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "7ebf1e85-35c3-4ec0-abe9-ea098b9f9c36",
                        displayName: "Plotly",
                        description: "用于创建交互式图表和可视化的库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/170bf9ed6b04415dafaa1dcbc8358cd7.PyTorch.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=fTn%2BMSCqeRsc7YwA7ADK2e%2FCdus%3D",
                        websiteUrl: "https://plotly.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "db79d6c7-0c86-427f-910a-2402668aee64",
                        displayName: "Seaborn",
                        description: "基于Matplotlib的Python库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/fdf8b7b41c52461e8f227c395163817b.Seaborn.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qqcNdeKx19GNZoEGnmSx3HyUZvo%3D",
                        websiteUrl: "https://seaborn.pydata.org",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "6b7597dd-f4e6-41c6-a503-cf08c1c04b3e",
        displayName: "数据集",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/03f7480a830a47f5ba30734b304e0cc4.Frame%20427321649.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=AqctALkukqKoucAusrW7X39T6x8%3D",
        children: [
            {
                nodeId: "4b9fb6b4-a8de-4046-aad2-c0553bfa1a67",
                displayName: "数据管理",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5d57a73a7a57465cad85d90a583767f2.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Wqs0EeUzU0OfrBAKuDSk9nLnHlA%3D",
                children: [],
                items: [
                    {
                        itemId: "11c92bea-c9ce-4393-87d0-b7321253ade1",
                        displayName: "VisualData",
                        description: "集合了多个计算机视觉数据集的在线平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d2b186881b1b405886895b46e5c85bbe.AWS%20AI%20%26%20ML.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=XRZBq%2FOHe43p2jWP9ncuecKCRB8%3D",
                        websiteUrl: "https://www.visualdata.io/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "67e3c8d4-d6b2-49ae-b9a3-2bd5b1db9c69",
                        displayName: "Kaggle",
                        description: "著名的数据科学平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250912/aa3b1a2167544aee98e6f42087bace06.AWS%20AI%20%26%20ML%20%281%29.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=3Ans2M8UT2nYMOH98te9VmNCknI%3D",
                        websiteUrl: "https://www.kaggle.com/datasets",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "731a2eca-fa5f-4669-940c-2c87f9352836",
                displayName: "数据平台",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/a11a2d21e0604e8fb09e16e4205dc433.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=K5zBnc9DuAx8SKKNheEuW7l2jYQ%3D",
                children: [],
                items: [
                    {
                        itemId: "5c088da9-d1fe-4f40-aaef-24bc870a15b3",
                        displayName: "Amazon Web Services (AWS) Public Datasets",
                        description: "AWS上的开放数据注册",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3b01a8a746094e469e3411e6c8a6cf97.11111.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=NlbDZzUH9TJJtAsFPHfQSrDmhwY%3D",
                        websiteUrl: "https://registry.opendata.aws",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "adcc2844-bbb4-4d48-b936-6ebba6856ba3",
                        displayName: "Microsoft Research Open Data",
                        description: "微软研究院提供的公开数据集",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/5dc943025671476dad98332780b1ba8c.Microsoft%20Research%20Open%20Data.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xiGzMGaf8NFNkW0nhbSa0U5Pss0%3D",
                        websiteUrl: "https://www.microsoft.com/en-us/research/project/open-data/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "95b9a636-b26d-4d33-aebe-cc3d30eab470",
                        displayName: "Stanford Large Scale Data Sets",
                        description: "斯坦福大学提供了一些大规模的公开数据集",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/8defff0cb42441f4afefc42e50b40936.Stanford%20Large%20Scale%20Data%20Sets.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Bhiy4G1ZSjDsijruaC9gU1Gar14%3D",
                        websiteUrl: "http://web.stanford.edu/class/cs224w/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ec4c7159-7313-4a8e-9f05-81a1769a08a4",
                        displayName: "GitHub",
                        description: "很多开发者和研究者在 GitHub 上发布数据集",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/fa692a3f14bf4457b3c3754698d6af78.GitHub.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=cIIL2QVPmll2dp99mYNbf%2FlR0uw%3D",
                        websiteUrl: "https://github.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "964db066-ecc6-429f-afa6-4a06caafefdd",
                        displayName: "OpenAI Datasets",
                        description: "用于人工智能和机器学习研究的公开数据集",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/ec6b9a470b36408ea69173554c929c64.OpenAI%20Datasets.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xvYa9c4UpdOnXm7wZl3b9GxBh50%3D",
                        websiteUrl: "https://openai.com/research/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2443b527-5ed6-4073-be69-8a7eba53034f",
                        displayName: "Browse State-of-the-Art",
                        description: "数据集网站",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/aa8b1d19133d4b5c9f3c8508083d9685.Browse%20State-of-the-Art.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=i20gO1YoURlz9e1XbrBaAYmEtaU%3D",
                        websiteUrl: "https://paperswithcode.com/sota",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ca2b828b-8179-4859-8c93-3d9236c8f0c4",
                        displayName: "UCI Machine Learning Repository",
                        description: "最早的机器学习数据集存储库之一",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/b1789b8971c24cf085fed5203b8e73bb.UCI%20Machine%20Learning%20Repository.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ExecGfWUwFvA2zzuJnZRBsVzBC0%3D",
                        websiteUrl: "https://archive.ics.uci.edu",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "eacf3ee7-dfc7-498c-a065-e35eca043169",
                        displayName: "ChinaXiv",
                        description: "中科院论文预发布平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/c6ffc71a356d43ceb2d9608d566f807d.ChinaXiv.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=po5mgfhNWeCKn69KiTTySNr6IlU%3D",
                        websiteUrl: "https://chinaxiv.org/home.htm",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "0889929e-c5ad-4a88-83bd-6ebac1042d0a",
        displayName: "研究领域",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/e951760db2a047a6b46e148cd85f6190.Frame-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=N%2BNnJDidnp7enxbWzN9R2Yvto5o%3D",
        children: [
            {
                nodeId: "11174944-7952-40a5-a30a-ae59c209e572",
                displayName: "自然图像",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/50211a605747413687c0f46cda878c70.Frame-4.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7pBcF3uvNUJoCr5IoqCwSdBYvuo%3D",
                children: [],
                items: [
                    {
                        itemId: "9c8d95cf-a8a4-4c72-bd80-5852530b52cd",
                        displayName: "OpenCV",
                        description: "广泛使用的计算机视觉库，支持图像和视频处理",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/4d45013b31484af9824e1d07069713e9.OpenCV.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2F3Y3Rfurjj5M4jpWULRE6SLsh94%3D",
                        websiteUrl: "https://opencv.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "dd39b0e4-ef1c-40f0-87f2-4009b44096b4",
                        displayName: "Dlib",
                        description: "C++ 编写的机器学习库，特别适用于图像处理和计算机视觉任务",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/794192f6fd3742c9ab00d577572ce853.Dlib.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YIWVUk1MMujFQxgRuoS6gZOhHvg%3D",
                        websiteUrl: "https://dlib.net",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "e9849ede-929f-4c4a-9f80-a8def1e15221",
                displayName: "知识图谱",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3cac6ee556b949aea841394388b91469.Frame-4.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EtyltYBGn2Txy%2BSCkhSv4tPj90w%3D",
                children: [],
                items: [
                    {
                        itemId: "1b4c033d-f19d-48bd-b05b-29016152e1d5",
                        displayName: "Neo4j",
                        description: "一种图数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/6c91a73927a24f3b99ff7a96b6e71bfb.Neo4j.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=z%2F0z7FrHfREwciGRV76PgVyNtSA%3D",
                        websiteUrl: "https://neo4j.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "2f53eb0d-c219-4382-903b-2173cb8ebd9a",
                        displayName: "RDFLib",
                        description: "Python库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/f1b58c54ad644701b7160de635edf306.RDFLib.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=LKh6wNBLtwc8BH%2FYv0TRqZSOrHs%3D",
                        websiteUrl: "https://rdflib.readthedocs.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f58725b6-4299-43bf-9b61-3170d41c6559",
                        displayName: "GraphDB",
                        description: "一个高效的图数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/c822fd561442474eb349889a735dba60.GraphDB.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=OeHUIahBj8ajzIRc7CacjyN2UNw%3D",
                        websiteUrl: "https://www.ontotext.com/products/graphdb",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "3d7ecb46-e6be-44db-b570-5ff457697089",
                        displayName: "Blazegraph",
                        description: "开源图数据库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/153d31442c12422998ed07d0f81ba628.Blazegraph.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=R1KXGHXvTZ%2FvdS%2Btqqn%2Fc4%2B3r90%3D",
                        websiteUrl: "https://blazegraph.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "58f69cb8-c8da-4e1b-8435-fef141ad4753",
                        displayName: "PyTorch Geometric",
                        description: "一个基于PyTorch的图神经网络库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/5bacc2a737d046cab5ca49cfb2b23ee0.PyTorch%20Geometric-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=f8999elRkWPJ7naT6dbMY8wSgag%3D",
                        websiteUrl: "https://pytorch-geometric.readthedocs.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "888cca02-3d87-42c1-9c3d-0411065a68a7",
                        displayName: "DGL (Deep Graph Library)",
                        description: "开源的图神经网络库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/cf6bede887b84ab781e243b014d05122.DGL%20%28Deep%20Graph%20Library%29.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TkvF8ku5qG5LUqkqOJ%2FS3z6Dor4%3D",
                        websiteUrl: "https://www.dgl.ai",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "c6e462c9-648a-4a99-b641-b96053f83a89",
                        displayName: "Spektral",
                        description: "基于Keras的图神经网络库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/f0df632b31c242eca7469e0529e8bf97.Spektral.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YT75iHhZTEyp%2Fjl5Y6fkJtD5iZ0%3D",
                        websiteUrl: "https://graphneural.network",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "f7a25122-99a9-44ca-a66b-25609cea6440",
                displayName: "图神经网络",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/39088f530a3c4534854257adcce168c9.Frame-3.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=FRBne%2FmTUn%2FyhwejcSOX3eczgGQ%3D",
                children: [],
                items: [
                    {
                        itemId: "92e9fc7e-beab-405e-9c15-f5a98a4fed76",
                        displayName: "PyTorch Geometric",
                        description: "PyTorch 的图神经网络库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/72d68dd8905543db93d9538679621094.PyTorch%20Geometric.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TC5ohVO3QNYuEilgyXYk%2FVC29k8%3D",
                        websiteUrl: "https://pytorch-geometric.readthedocs.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "74fcc403-ac34-4469-b529-14b3d043e43f",
                        displayName: "DGL (Deep Graph Library)",
                        description: "开源的图神经网络库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/03b7be751aa84a9f9a6e949ba9973101.DGL%20%28Deep%20Graph%20Library%29-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aXChf5%2FjYwxofwQxWLzydlozITw%3D",
                        websiteUrl: "https://www.dgl.ai",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "bfef6ecb-f6c6-4b8d-b44e-842aab368cc0",
                        displayName: "GraphSAGE",
                        description: "图神经网络算法",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/e5e9d877a6d04e55afd6eea37a3f7e4f.GraphSAGE.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=E1vyQFOslaDMQ1feFia3SqBT80E%3D",
                        websiteUrl: "https://github.com/williamleif/graphsage-simple",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "cec88078-cd6c-4ff9-b09d-d50537fb781a",
                displayName: "大模型",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/0675c41896244bba9859f0924c19c505.Frame-4.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yHAeEP5iW8KZAbLXGW7yeAvP4%2BQ%3D",
                children: [],
                items: [
                    {
                        itemId: "1c157749-8d7d-429d-b70b-aefbbdbb00a3",
                        displayName: "OpenAI",
                        description: "提供强大的人工智能模型",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/95fce0bcc8dc49caae66bc78e8d13d14.GPT.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=3Q2w4UiUnFoZn8KshhJYSIgY%2FPI%3D",
                        websiteUrl: "https://openai.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "cb843d3d-67bd-433a-baac-04d1866f39b6",
                        displayName: "BERT",
                        description: "Google 提出的预训练语言模型",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/ac14917b19774a38992d40b45d977648.BERT.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EPzlY0%2BGPrayOfE5TshE7fRP9Ok%3D",
                        websiteUrl: "https://github.com/google-research/bert",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "ea1ad4f1-9f2b-4fa9-9707-090f5e60be94",
                        displayName: "T5",
                        description: "Google 提出的一个统一文本转换框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/364531ad00ed4bd4aa9bf7268015b89a.T5.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=YrfjS4XThE1%2FVHnbzu%2FytabnAYY%3D",
                        websiteUrl: "https://github.com/google-research/text-to-text-transfer-transformer",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "04a331ce-e830-4ffa-92ec-27e0e3b369fd",
                displayName: "时间序列",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/338658e69f1d4ada8beb5b0a4da4ade4.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=pMSac%2BHpJojCfrL3Sf7ZwKlJvEg%3D",
                children: [],
                items: [
                    {
                        itemId: "c61c229d-b13c-460c-933a-2f6c9d18b41f",
                        displayName: "Prophet",
                        description: "由 Facebook 开发的时间序列预测库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/1720416f717e43cfafe4211992829c0b.Prophet.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Au%2BMNPIZn4%2BkOY6XLpdJF9eZJ60%3D",
                        websiteUrl: "https://facebook.github.io/prophet",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "33e3c9b9-32c5-4b6f-9f51-316009c34f19",
                        displayName: "Statsmodels",
                        description: "python 中用于统计建模的库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/19f32ffe0be44e0c9c4f529f37340e36.Statsmodels.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=gn53FGhFD2OGj7LjsuVhjKdMP1Q%3D",
                        websiteUrl: "https://www.statsmodels.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "173fc0bb-23ab-40c9-bd26-c42d502322a3",
                        displayName: "TSlearn",
                        description: "用于时间序列数据学习的 Python 库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/79b84661ddef49138414277f8218edad.TSlearn.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eOA4oX0A5z4PTarB3DuvLzeGC%2Bw%3D",
                        websiteUrl: "https://tslearn.readthedocs.io",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "e900937d-f86c-43a2-af88-600253197c7d",
                displayName: "计算机视觉",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/505ffe9a8e024c669ff0d02487ecbfae.Frame-5.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bHKlz6jwY0zBjwhtHAXfZby571g%3D",
                children: [],
                items: [
                    {
                        itemId: "295c95d9-1927-43b0-99d7-e5d40c663ecb",
                        displayName: "YOLO",
                        description: "用于物体检测的深度学习模型，支持实时目标检测",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/63a72dd3a4db463ca4e9225fffdddfb9.SimpleITK.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=HW%2BX4t9VAMdk8B7CkqF1SV6NxGs%3D",
                        websiteUrl: "https://pjreddie.com/darknet/yolo/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1b37f14d-5d22-407a-a315-c11c2b2cd07b",
                        displayName: "Faster R-CNN",
                        description: "一种用于物体检测的卷积神经网络",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/3e88082303044d68b888b4596c6295e7.Faster%20R-CNN.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=cTFzeG01QC%2FayejpaVQY8gvtnAU%3D",
                        websiteUrl: "https://github.com/rbgirshick/py-faster-rcnn",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "0567c4b9-0e2d-4e7d-98f4-f6adf00ff626",
                        displayName: "Mask R-CNN",
                        description: "Faster R-CNN 的扩展，能够进行实例分割",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/7c4e470dcdef42188040d7c7b07e7337.Mask%20R-CNN.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yC%2FvNMVK1P7LKPT6D0zyV4smmlY%3D",
                        websiteUrl: "https://github.com/matterport/Mask_RCNN",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "4b519b1c-c7a4-4b98-b568-59b418a9ccc1",
                displayName: "自然语言处理",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3e07f6c543674172840af9c951764d15.Frame-6.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=wviKp1YRT8SCHQ%2BhjFvtaZ%2FYsH8%3D",
                children: [],
                items: [
                    {
                        itemId: "44fa6f07-e3a1-4df6-a9dd-8b0d3a829386",
                        displayName: "Hugging Face",
                        description: "专注于自然语言处理",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/b4949dfb18934513b10fba991d86577f.Transformers.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ldJR965jdv%2BuhdvpvUIkIMNudmA%3D",
                        websiteUrl: "https://huggingface.com/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "b907c404-e94a-4373-a58f-40964ab26871",
                        displayName: "IBM Watson",
                        description: "IBM Watson 是 IBM 提供的 AI 平台",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/cf0e1beca3b445b184bfd8b641534ad2.IBM%20Watson.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xRvVr0tAulWRwMDAWLdP0exfqBM%3D",
                        websiteUrl: "https://www.ibm.com/cn-zh/watson",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "8d9553ed-d7e2-4569-983d-bd3e44a9368c",
                        displayName: "spaCy",
                        description: "一个工业级自然语言处理库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/4ed2b8e0b9fe414183ababceb92b25ab.spaCy.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=kT37rb1MvypADDxR34I0wiHSEFA%3D",
                        websiteUrl: "https://spacy.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "185dadd5-8a6f-4419-90da-e6acc08eafcc",
                        displayName: "NLTK",
                        description: "Python 中最广泛使用的自然语言处理库之一",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/d7575f060c3142239cb23cb3a992cbf5.NLTK.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=bjuAUUSi5yehjSzVgWXpqj34GjE%3D",
                        websiteUrl: "https://www.nltk.org/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "38a28f73-c238-475e-8079-5955a8ecacfe",
                        displayName: "Transformers",
                        description: "用于处理预训练的 Transformer 模型",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/d920e17623e34491a08efbf5f7eb4726.Transformers.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=7XB1T84r3397WnvwS3IcmkgZQF4%3D",
                        websiteUrl: "https://huggingface.co/transformers",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "136923cc-fb58-4ed8-a6d9-e9cd4968269a",
                displayName: "三维重建与建模",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d873d0ace9a54cbc8d85c5a5ba218b6e.Frame-5.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=BB7yIDXN3m6bWN27Rt%2BZseGp08k%3D",
                children: [],
                items: [
                    {
                        itemId: "36888226-13b2-4e08-b872-af683bd2624e",
                        displayName: "Open3D",
                        description: "支持三维数据处理、可视化和分析的开源库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/3a5416d1dbc94636a4a7d24fad89e2fa.Open3D.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FKqEqffj4LpdCcRnWN7Y4K65ecg%3D",
                        websiteUrl: "http://www.open3d.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "287b7571-ef06-414b-a55b-ce19fca55af5",
                        displayName: "PyVista",
                        description: "用于 3D 数据可视化和分析的 Python 库，基于 VTK 库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/debec1d38a2b456ca7dfd89a69588598.PyVista.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=qh4RuQdz2tSvhvCg5k7s7ot8fw0%3D",
                        websiteUrl: "https://pyvista.org",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "9df0d6e6-3744-481f-9aa9-284b55d8a091",
                        displayName: "MeshLab",
                        description: "用于处理和编辑三维网格数据的开源软件",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/7ab495708ce84c6dbd25effb96219ddc.MeshLab.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KOqDvwME4FFfG94tOq7X7XAW7eg%3D",
                        websiteUrl: "https://www.meshlab.net",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "161b0cdc-cbaf-43ab-9efd-c2e64ef51448",
                displayName: "医学图像",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/9a2a9122a514420bbe07bdfdc4dccb21.Frame-7.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=EUJmNSZXzeKYVA0wMWc4s9qcS7A%3D",
                children: [],
                items: [
                    {
                        itemId: "88792703-ad8d-4013-b92f-3232a3768ac3",
                        displayName: "SimpleITK",
                        description: "一个简化ITK的Python接口",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/926bf84ce61e4d4eb948f3806dbb958d.ITK-SNAP.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=QhBbKj18iA4Ol%2BYBOwQp%2FRUEgmg%3D",
                        websiteUrl: "https://simpleitk.readthedocs.io/en/master/",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "d17ceca0-0ada-4b2c-98e1-5524da9d20c2",
                        displayName: "MedPy",
                        description: "医学图像处理的 Python 库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/fc6742be950b4b238e8ac51e87f1b3fd.MedPy.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=yCcB5QueyQbay7TKTbX4M4X5F58%3D",
                        websiteUrl: "https://loli.github.io/medpy",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "aada9d1c-acf3-48ae-a4b6-5d112b6e9051",
                        displayName: "3D Slicer",
                        description: "开源医学图像分析软件",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250910/d866471bfaec48a3a721b21e32c759b5.3D%20Slicer.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=WEQfCxqdSk6S3nDIogzjP1nD6e0%3D",
                        websiteUrl: "https://www.slicer.org",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "60cd5b18-e076-4637-ac8f-3f9d6434ff66",
        displayName: "文献与期刊",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/df7856d541d54987b38f5cf644b00542.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=PhkWLhy%2FDsTgtS9p8GIFDrsqlQc%3D",
        children: [
            {
                nodeId: "70e45c25-c9cf-43c5-b9b1-faf307ef67c9",
                displayName: "会议与竞赛",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/1526dfd2d2f247848451922421f52c36.Frame-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=0wlDCBO6LkK%2BenUIvI1eTVbtCrM%3D",
                children: [],
                items: [
                    {
                        itemId: "daa01f1c-c99d-42cf-9dcb-11843cdb5093",
                        displayName: "CVPR",
                        description: "计算机视觉领域最顶级的会议之一",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/b2071808038e46d0bd4bb208fe12613c.CVPR%20.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ZSjwlh%2F6alTOOPtWzZsjNHSKMLg%3D",
                        websiteUrl: "https://cvpr.thecvf.com",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "1cb680e8-910b-470a-903e-c0e12a9e2bf3",
                        displayName: "NeurIPS",
                        description: "机器学习和计算神经科学领域的顶级会议",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/e3ab7991bb2a46ccaeef03c1604d7900.NeurIPS%20.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=lTmyq0xjBmddKMNqorLE2ZsB0Vs%3D",
                        websiteUrl: "https://nips.cc",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "0aa9c0bc-4bba-4fb1-bd17-8287d1f9ddf2",
                        displayName: "ICML",
                        description: "全球顶级机器学习会议之一",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/db69606d95ae482cad5163184b3b87da.ICML%20.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=tbd7FYMQoROVAP9U2zJpvyiNSE0%3D",
                        websiteUrl: "https://icml.cc",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "7a29ff34-30eb-4913-ae35-282b9d7eec59",
                displayName: "必读期刊",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/a14db1eadc5243b8adaa93a78ea4387b.Frame-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=IL0bn3mGf%2FZCcB1LLyRCOe25ot8%3D",
                children: [],
                items: [
                    {
                        itemId: "60655585-f060-466a-be8d-697a80ef14a8",
                        displayName: "IEEE",
                        description: "关注神经网络及其学习系统的国际学术期刊",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/d0985647d00d4e249349d0b8b03dfb7d.IEEE.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=T9V%2FgU2S553wRBwaGLEvSO7tOk4%3D",
                        websiteUrl: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=72",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "dbbefbb4-ed61-4fdb-ab32-f5d6d0d40dc3",
                        displayName: "Neural Networks",
                        description: "专注于神经网络的各类研究",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/8aac278d69234d95a2168c2b82aac229.Neural%20Networks.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=5JZYi765dEe5ASZ%2B0NAUUoXg7ps%3D",
                        websiteUrl: "https://www.sciencedirect.com/journal/neural-networks",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "f7531f3f-5383-4c1c-ad0f-64edfcfbf1ed",
                        displayName: "Journal of Machine Learning Research",
                        description: "机器学习领域的重要期刊",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/f7c1fc9a8fab436cb0b331e28a775f3b.%28JMLR%29.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TS4Z4aYnql3WBlHghHk4mksy4K4%3D",
                        websiteUrl: "http://www.jmlr.org",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "9f75eb1d-236e-40be-8540-ff1dde759828",
        displayName: "前沿技术",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/a960ceccd46e41119f467a50ef3d8439.Frame-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=6xg4biTzRFbGi3i2ERl%2F8dM66g4%3D",
        children: [
            {
                nodeId: "51ead864-30d8-4737-a489-40411145b1a9",
                displayName: "联邦学习",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/7384e124f533465f9b930e294b740a18.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FovAvwA1X6srTScon3bxEBKbJ00%3D",
                children: [],
                items: [
                    {
                        itemId: "ae07ad10-e7f8-474d-8677-e4becb7bd122",
                        displayName: "TensorFlow Federated",
                        description: "一个用于联邦学习的 TensorFlow 扩展",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/30b4bcf89caa4fbfbe9b99f4afcc6865.TensorFlow%20Federated.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=xOZbV0QeLYiTvc5O3rXo4z6sIGs%3D",
                        websiteUrl: "https://www.tensorflow.org/federated",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "0c9bfe6c-75fb-4dde-a651-c8a0aa6bb074",
                        displayName: "PySyft",
                        description: "用于隐私保护的深度学习框架",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/f24844f022514dc6933889a7bc8e2bac.PySyft.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2BwHUlNxi2DdfGYCybocQzF%2B4ftg%3D",
                        websiteUrl: "https://github.com/OpenMined/PySyft",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "79bcf498-cd26-4ccb-a36e-bfeb857016ba",
                displayName: "分布式计算",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/0083881e9ecd46eaba72349ac4c81fee.Frame.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=4bI65C0H0cIMRPW%2FZpdMOSWrww8%3D",
                children: [],
                items: [
                    {
                        itemId: "6c9e4af1-28d5-4fe2-97c2-3e2edddf3e82",
                        displayName: "Horovod",
                        description: "一个分布式深度学习训练框架，支持多种框架的分布式训练",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/b829610440464eb78cbf7b794234484a.Horovod.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=2lRBBH1y5nmFJfUBb4rtFyaF2tw%3D",
                        websiteUrl: "https://horovod.readthedocs.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "83a4f191-78b2-4589-a588-4a978bf806b4",
                        displayName: "Ray",
                        description: "用于大规模分布式计算和并行计算的库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/399843329e544e269be31a1f7753e7b0.Ray.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=D2BKFHeqyJ59Ht8piKFtI5snm3Q%3D",
                        websiteUrl: "https://www.ray.io",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "a90d64a7-8659-4aa7-96fb-35bf8cec8dd9",
                        displayName: "DeepSpeed",
                        description: "一个用于加速大规模深度学习训练的开源库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/1583e3bccdaa4d4983c428eb72869e02.DeepSpeed.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=Fb41zlhym55OLVAnKJBIKr4qXDo%3D",
                        websiteUrl: "https://www.deepspeed.ai",
                        redirectType: "DETAIL"
                    }
                ]
            },
            {
                nodeId: "f44d232b-6006-4d47-bf2c-c7f231ad2e54",
                displayName: "对抗学习与防御",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/247a32733dd3476f9d7ba508236ff8f3.Frame-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=UjmrkUcIR6o4BkvIXXqJXypq2pg%3D",
                children: [],
                items: [
                    {
                        itemId: "1ea58e6c-6081-4617-9b7a-df86ca9f34be",
                        displayName: "Adversarial Robustness Toolbox ",
                        description: "一个用于测试和增强机器学习模型对抗鲁棒性的工具包",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/b3f21e7afa644b64aa645a38c451998d.CleverHans.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=pZUHoQYv6c9bLfp8ezHKAB3aHh0%3D",
                        websiteUrl: "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
                        redirectType: "DETAIL"
                    },
                    {
                        itemId: "314e77bf-42fc-4c6d-937b-e1d665ec3ca4",
                        displayName: "CleverHans",
                        description: "一个用于对抗机器学习模型进行攻击和防御测试的库",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/228eb4e0185e4664b865f9a0bf45d9eb.CleverHans.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=AALHcf5695oZqiyOZ7C5qirZUXs%3D",
                        websiteUrl: "https://github.com/cleverhans-lab/cleverhans",
                        redirectType: "DETAIL"
                    }
                ]
            }
        ],
        items: []
    },
    {
        nodeId: "96b2b199-aae4-4b5c-97a4-e7323f2cd5c7",
        displayName: "学习路线",
        nodeType: "MENU",
        iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/9bcae0daa0984aae9c19a74e19f51930.xuexiluxian.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=UkAMaxmUVN8OddplbdEEhNt72uY%3D",
        children: [
            {
                nodeId: "0b293067-b877-4fea-b44f-fa2c5dc53c56",
                displayName: "论文写作",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/tutor.jpeg?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FsbeA75zS0uhJD4j2f9BmZUQ4XI%3D",
                children: [],
                items: [
                    {
                        itemId: "029cc529-6913-438e-9bb4-3c35ea8c9436",
                        displayName: "论文写作全流程",
                        description: "资料形式：视频+资料\n资料内容：原理讲解+项目实战\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/d589a551833a47a2a9b4aa3d706fccaa.Mask%20group-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=aYT8UNV3SBNlafKnapiir95PIQk%3D",
                        websiteUrl: "https://b23.tv/LjkOElT",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "263bdc04-a83d-437d-80f8-ab13798c79e9",
                        displayName: "论文写作",
                        description: "资料形式：视频+资料\n资料内容：原理讲解+案例实操\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/7cc8103d0ff44cfa9635322ebd66fff3.Mask%20group.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=0pNtsdHxdcNHhoXfY4GH7vyWRNc%3D",
                        websiteUrl: "https://b23.tv/XaNlUzt",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "2b0d79ab-98e4-4b62-a8b6-0ca27c72a4ef",
                        displayName: "论文结构图",
                        description: "资料形式：视频+资料\n资料内容：查找并筛选数据集\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/9e080b5cd50648fdb4b4eff1e5177e4f.Mask%20group-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=4pR7V2cYGL8QqndQDnyzVZx9UGs%3D",
                        websiteUrl: "https://b23.tv/kkocOeW",
                        redirectType: "DETAIL_HOT"
                    }
                ]
            },
            {
                nodeId: "81d3f028-fb1b-41be-b0db-f67751a6ab5e",
                displayName: "时间序列",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/tutor.jpeg?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FsbeA75zS0uhJD4j2f9BmZUQ4XI%3D",
                children: [],
                items: [
                    {
                        itemId: "2f3816a9-e36a-425d-bbcf-ff349ffa31ef",
                        displayName: "时间序列基础知识",
                        description: "资料形式：视频+资料\n资料内容：查找并筛选数据集\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/4262713aac1b4c49b38a5a2df64c4156.Mask%20group-5.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FJSJoRtJ%2FN7IvewlGqHUjX030Go%3D",
                        websiteUrl: "https://b23.tv/4KiKvTc",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "f9173dd3-572a-403d-98f5-fdb6127b3b1d",
                        displayName: "时间序列序列2025年论文合集",
                        description: "资料形式：视频+资料\n资料内容：原理讲解+项目实战\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/37469c11c91142bd8b26e344446b8bef.Mask%20group-3.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=KdgXyl0okxcXMqlOdyq3%2Byuo5IY%3D",
                        websiteUrl: "https://b23.tv/lz4zNAK",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "4f5c6c99-5e34-4bed-b3f7-09b421b8688f",
                        displayName: "时间序列经典模型",
                        description: "资料形式：视频+资料\n资料内容：原理讲解+案例实操\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/f9c8f9ee03a44762a2b1a756add00258.Mask%20group-6.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=ONc%2FsKxSMt%2Fc1%2FM%2Ffx8Khj5dYmg%3D",
                        websiteUrl: "https://b23.tv/TeNAyqz",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "df32ef18-9a15-4214-9850-c91eb18c6263",
                        displayName: "时间训练进阶方法与实战应用",
                        description: "资料形式：视频+资料\n资料内容：核心算法细讲+逐行代码解读\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/99193a86371241529b810d28ab593cf3.%E6%97%B6%E9%97%B4%E5%BA%8F%E5%88%97%E6%96%B9%E6%B3%95%E8%BF%9B%E9%98%B6.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=eA4Gj6Md8HjB3UvTpuDr3AsDxZM%3D",
                        websiteUrl: "https://www.malaedu.com/#/courses",
                        redirectType: "DETAIL_HOT"
                    }
                ]
            },
            {
                nodeId: "91d427c3-9ea1-4740-b97b-92055adfa0d9",
                displayName: "科研入门",
                nodeType: "MENU",
                iconPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/tutor.jpeg?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=%2FsbeA75zS0uhJD4j2f9BmZUQ4XI%3D",
                children: [],
                items: [
                    {
                        itemId: "fdf3ae5a-fab4-4a91-b00b-bc0e577deb10",
                        displayName: "AI人工智能基础",
                        description: "资料形式：视频+资料\n资料内容：核心算法细讲+逐行代码解读\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/0d81b9baabe942e4b1fb7259708fa719.Mask%20group-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=WrYE6O5Wz7kF6yLJJgF%2Fp%2BQQwXc%3D",
                        websiteUrl: "https://b23.tv/LkfPa7R",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "1f1bbe61-1246-49e5-ab03-d55dffb42cc0",
                        displayName: "基础模型",
                        description: "资料形式：视频+资料\n资料内容：查找并筛选数据集\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/77d4783b5c3f445594c3a8f1e6133a03.Mask%20group-3.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=iiSvJFOurnmB4VxmaCXTdJh6eDA%3D",
                        websiteUrl: "https://b23.tv/m3dSv4d",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "1091bccb-fac5-4f40-b00e-2e924c361e9d",
                        displayName: "深度学习从入门到精通",
                        description: "资料形式：视频+资料 资料内容：核心算法细讲+逐行代码解读 内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/3703d4a6fb0c4876950ad991a5c34c8e.Mask%20group-1.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=TF5DnWw5I7011JCsotG49q0j4gY%3D",
                        websiteUrl: "https://b23.tv/uAZEdj4",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "61c42ab1-51cd-4ffe-a65a-992a893972dc",
                        displayName: "0基础入门Pytorch",
                        description: "资料形式：视频+资料\n资料内容：原理讲解+案例实操\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/535d45e6ecac4c5fb07135594dd6d666.Mask%20group-2.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=CtWrvkoGaDZdsMQeeTNES5HAGsU%3D",
                        websiteUrl: "https://b23.tv/6quczUs",
                        redirectType: "DETAIL_HOT"
                    },
                    {
                        itemId: "31f26487-d623-4e99-9b7b-491640538e1b",
                        displayName: "强化学习0基础入门",
                        description: "资料形式：视频+资料\n资料内容：核心算法细讲+逐行代码解读\n内容数量：更新中",
                        logoPath: "https://mala-lr-prod.oss-cn-hangzhou.aliyuncs.com/filehub/navigation/20250911/aea6bc44227b48748e363ff8df0f7835.Group%20427320620.png?Expires=1758527862&OSSAccessKeyId=LTAI5tDWrp4ZJjSHuR4BhBVw&Signature=8LlDXZNgoVWx7s%2BZuix6AJcKkys%3D",
                        websiteUrl: "https://b23.tv/sg3sWbq",
                        redirectType: "DETAIL_HOT"
                    }
                ]
            }
        ],
        items: []
    }
];

/** 菜单类型  */
export interface MenuType {
    /** 类型key */
    key: string;
    /** 类型名称 */
    label: string;
    /** 禁用 */
    disabled?: boolean;
    /** 是否默认 */
    default?: boolean;
    /** 菜单节点 */
    menu: MenuNode[];
}

/** 菜单类型列表 */
export const menus: MenuType[] = [{
    key: '1',
    label: '通用学科',
    disabled: false,
    default: false,
    menu: commonMenuNodes
}, {
    key: '2',
    label: '计算机科学',
    disabled: false,
    default: true,
    menu: computerMenuNodes
}];

/** 根据菜单类型获取菜单节点 */
export function getMenuNodesByType(type: string): MenuNode[] {
    return menus.find(item => item.key === type)?.menu || [];
}

/** 获取默认菜单类型 */
export function getDefaultMenuType(): MenuType {
    return menus.find(item => item.default) || menus[0] as MenuType;
}