const { ccclass } = cc._decorator;

/**
 * [T] 空组件
 * - 解决cc.Node不支持的一些cc.Component方法,例如schedule()
 */
@ccclass
export class TNull extends cc.Component {

    static get(node: cc.Node) { return node.getComponent(TNull) || node.addComponent(TNull) }

}
