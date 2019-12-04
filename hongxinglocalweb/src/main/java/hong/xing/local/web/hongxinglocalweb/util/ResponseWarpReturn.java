package hong.xing.local.web.hongxinglocalweb.util;

@FunctionalInterface
public interface ResponseWarpReturn<T> {
    T  get()throws Exception;
}
