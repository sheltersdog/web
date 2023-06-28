export const inquiryLink = () => {
  const email = 'sheltersdog@gmail.com'
  const subject = '문의하기'
  const body = '안녕하세요.\n\n문의내용을 입력해주세요.\n\n감사합니다.'
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}