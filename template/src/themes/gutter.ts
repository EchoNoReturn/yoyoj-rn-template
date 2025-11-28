import type { ViewStyle } from "react-native";

/**
 * 间隙样式生成器
 * @param size 间隙大小
 */
function gutterGenerator(size: number) {
  return {
    gap: {
      gap: size,
    },
    padding: {
      padding: size,
    },
    paddingHorizontal: {
      paddingHorizontal: size,
    },
    paddingVertical: {
      paddingVertical: size,
    },
    paddingTop: {
      paddingTop: size,
    },
    paddingBottom: {
      paddingBottom: size,
    },
    paddingLeft: {
      paddingLeft: size,
    },
    paddingRight: {
      paddingRight: size,
    },
    margin: {
      margin: size,
    },
    marginHorizontal: {
      marginHorizontal: size,
    },
    marginVertical: {
      marginVertical: size,
    },
    marginTop: {
      marginTop: size,
    },
    marginBottom: {
      marginBottom: size,
    },
    marginLeft: {
      marginLeft: size,
    },
    marginRight: {
      marginRight: size,
    },
  } as const satisfies Record<string, ViewStyle>;
}

export default gutterGenerator;