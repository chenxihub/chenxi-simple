/*
 * 获取项目文件列表
 * 按不同项目加载对应文件
 */
class Project {
  constructor(context) {
    this.files = {};
    this.importAll(context);
  }

  importAll(r) {
    r.keys()
    .forEach(key => this.files[key] = r(key));
  }

  import(path) {
    if (this.files && this.files[path]) {
      return new Promise((cb) => cb(this.files[path].default));
    }
    return import(`${path}`);
  }
}

export default Project;
