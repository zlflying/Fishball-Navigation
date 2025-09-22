import type {Env} from "./env";

export default function prodEnv(): Env {
    return {
        baseUrl: '/Fishball-Navigation/',
        appName: '鱼丸导航',
        appDesc: '鱼丸导航核心模块，整合多学科科研资源。包含: 1. 学术数据库: 知网、万方、维普、Web of Science、PubMed等权威学术资源 2. 科研工具: ChemDraw、BioRender、Origin等专业绘图软件 3. 专利检索: 国知局、专利之星等专利信息平台 4. 学术社交: LinkedIn、Academia等学术交流平台 5. 学习资源: 涵盖深度学习、强化学习等AI领域教程 6. 专业平台: 医学、心理学、社会科学等专业文献库 为科研工作者提供一站式学术资源导航服务。',
        appKeywords: '学术搜索,文献检索,数据库,期刊,论文,专利检索,引文索引,预印本,科研绘图,数据可视化,ChemDraw,BioRender,Origin,Adobe Illustrator,PowerPoint,R语言,ggplot2,知网,万方,维普,PubMed,arXiv,Web of Science,ScienceDirect,ProQuest,Wiley,Cambridge Journals,专利之星,国知局,专利检索,知识产权,学术交流,LinkedIn,Academia,Semantic Scholar,深度学习,强化学习,时间序列,AI基础',
    }
};