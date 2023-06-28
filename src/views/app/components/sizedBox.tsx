class SizedBoxParam {
  readonly width?: string | undefined = '0px';
  readonly height?: string | undefined = '0px';
  readonly className?: string | undefined = '';
}

const SizedBox = ({ width, height, className }: SizedBoxParam) => {
  if (width !== undefined) {
    return <div className={className} style={{ width, height, display: 'inline-block' }}></div>
  }
  return <div className={className} style={{ height }}></div>
}

export default SizedBox