import { postRequest, getRequest } from '/@/lib/axios';

/**
 *  @ApiOperation("查看充值历史记录")
 *     @GetMapping("/recharge/history")
 *     public ResponseDTO<PageResult<RechargeLog>> history(@RequestParam("pageSize") Integer pageSize,
 *                                                         @RequestParam("pageNum") Integer pageNum) {
 *         RequestUser requestUser = SmartRequestUtil.getRequestUser();
 *         PageParam pageParam = new PageParam();
 *         pageParam.setPageNum(pageNum);
 *         pageParam.setPageSize(pageSize);
 *         return rechargeService.queryRechargeLog(requestUser, pageParam);
 *     }
 *
 *     @ApiOperation("生成礼品卡")
 *     @PostMapping("/recharge/gift-card/generate/{amount}")
 *     public ResponseDTO<String> generateGiftCard(@PathVariable BigDecimal amount) {
 *         String s = rechargeService.generateGiftCard(amount);
 *         return ResponseDTO.ok(s);
 *     }
 *
 *     @ApiOperation("进行充值-礼品卡(使用礼品卡)")
 *     @GetMapping("/recharge/gift-card/use")
 *     public ResponseDTO<String> useGiftCard(@RequestParam String giftCard) {
 *         RequestUser requestUser = SmartRequestUtil.getRequestUser();
 *         rechargeService.useGiftCard(giftCard, requestUser);
 *         return ResponseDTO.ok();
 *     }
 *
 *     @ApiOperation("查看礼品卡列表")
 *     @GetMapping("/recharge/gift-card-list")
 *     public ResponseDTO<PageResult<GiftCard>> getGiftCardList(@RequestBody GiftCardForm giftCardForm) {
 *         return rechargeService.queryGiftCard(giftCardForm);
 *     }
 * @type {{}}
 */
export const rechargeApi = {
  // 查看充值历史记录
  queryRechargeHistory: (param) => {
    return getRequest('/recharge/history', param);
  },
  // 生成礼品卡
  generateGiftCard: (amount) => {
    return getRequest(`/recharge/gift-card/generate/${amount}`);
  },
  // 进行充值-礼品卡(使用礼品卡)
  useGiftCard: (giftCard) => {
    return getRequest(`/recharge/gift-card/use?giftCard=${giftCard}`);
  },
  // 查看礼品卡列表
  queryGiftCard: (param) => {
    return postRequest('/recharge/gift-card-list', param);
  },
};
