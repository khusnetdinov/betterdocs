module Jekyll
  class RevisionGenerator < Generator
    def generate(site)
      hash = %x( git rev-parse --short HEAD ).strip
      site.data['hash'] = hash
    end
  end
end
